import { useState } from 'react';

import { AuthForm } from 'components/common/AuthForm';
import { useAuth } from 'lib/useAuth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useAuth();

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
          signUp(email, password);
        }}
      />
    </div>
  );
}
