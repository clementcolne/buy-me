'use client';

import Button from 'antd/es/button';
import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <Button type="primary" onClick={() => signOut()}>
          Déconnexion
        </Button>
      </div>
    );
  }
  return (
    <Button type="primary" onClick={() => signIn()}>
      Connexion
    </Button>
  );
};

export default SignInButton;
