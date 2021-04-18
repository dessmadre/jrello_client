import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apollo';
import { AuthProvider } from 'lib/useAuth';
import { ContentProvider } from 'lib/useContent';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <ContentProvider>
          <Component {...pageProps} />
        </ContentProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
