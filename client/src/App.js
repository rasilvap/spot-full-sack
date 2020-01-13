import React from 'react';
import './App.css';
import StoreBuilder from './container/StoreBuilder'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <StoreBuilder></StoreBuilder>
    </div>
    </ApolloProvider>
  );
}

export default App;
