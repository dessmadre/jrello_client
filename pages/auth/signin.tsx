import { AuthForm } from 'components/common/AuthForm';
import { useAuth } from 'lib/useAuth';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  return (
    <div>
      <AuthForm
        email={email}
        handleEmail={(e) => {
          e.preventDefault;
          setEmail(e.target.value);
        }}
        password={password}
        handlePassword={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
        onClick={(e) => {
          e.preventDefault();
          signIn(email, password);
        }}
      />
    </div>
  );
}
