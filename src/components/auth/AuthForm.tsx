
// src/components/auth/AuthForm.tsx
import React from 'react';

interface AuthFormProps {
  type: 'signup' | 'signin';
}

const AuthForm: React.FC<AuthFormProps> = ({type}) => {
  return (
    <div>
      <h2>{type === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
      {/* Add your form elements here */}
      <button>Submit</button>
    </div>
  );
};

export default AuthForm;
