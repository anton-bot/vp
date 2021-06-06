import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { ApolloProvider } from '@apollo/client';
import { APOLLO_CLIENT } from '@/api/initializeApi';
import { MenuBar } from '../components/MenuBar/MenuBar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={APOLLO_CLIENT}>
      <MenuBar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
