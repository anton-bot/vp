import { AppProps } from 'next/app';
import '@/styles/global.css';
import { ApolloProvider } from '@apollo/client';
import { APOLLO_CLIENT } from '@/api/initializeApi';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={APOLLO_CLIENT}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
