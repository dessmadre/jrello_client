import { useState, useContext, createContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

import { useCurrentUserQuery } from 'lib/graphql/currentUser.graphql';
import { useLoginMutation } from 'lib/graphql/login.graphql';
import { useLogoutMutation } from 'lib/graphql/logout.graphql';
import { useRegisterMutation } from 'lib/graphql/register.graphql';
import { ObjectId } from 'mongoose';

type User = {
  _id: ObjectId;
  email: string;
};

type AuthProps = {
  user: User;
  error: string;
  signIn: (email: any, password: string) => Promise<void>;
  signUp: (email: any, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<Partial<AuthProps>>({});

// Wraps the app component and provides state to the complete applocation
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const client = useApolloClient();
  const router = useRouter();

  const [error, setError] = useState('');
  const { data } = useCurrentUserQuery({
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });
  const user = data && data.currentUser;

  const [signInMutation] = useLoginMutation();
  const [signupMutation] = useRegisterMutation();
  const [signOutMutation] = useLogoutMutation();

  const signIn = async (email, password) => {
    try {
      const { data } = await signInMutation({
        variables: { email, password },
      });

      if (data.login._id) {
        client.resetStore().then(() => {
          router.push('/boards');
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const signUp = async (email, password) => {
    try {
      const { data } = await signupMutation({
        variables: {
          email,
          password,
        },
      });

      if (data.register._id) {
        client.resetStore().then(() => {
          router.push('/boards');
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const signOut = async () => {
    try {
      await signOutMutation();
      client.resetStore().then(() => {
        router.push('/');
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    user,
    error,
    signIn,
    signUp,
    signOut,
  };
}
