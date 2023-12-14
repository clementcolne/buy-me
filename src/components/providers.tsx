'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface Props {
  childred: ReactNode;
}

const Providers = (props: Props) => {
  return <SessionProvider>{props.childred}</SessionProvider>;
};

export default Providers;
