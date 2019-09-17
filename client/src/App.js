import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList from './components/BookList';

//apollo setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends React.Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Ninjas Reading List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
