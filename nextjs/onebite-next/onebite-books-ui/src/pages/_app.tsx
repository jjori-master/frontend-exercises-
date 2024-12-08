import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import GrobalLayout from '../components/global-layout';
import { ReactNode } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GrobalLayout>{getLayout(<Component {...pageProps} />)}</GrobalLayout>;
}