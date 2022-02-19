import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';


import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Boats from './components/Boats';
import Carts from './components/Carts';
import Homes from './components/Homes';
import Storage from './components/Storage';
import Contact from './components/Contact';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/boats' component={Boats} />
          <Route path='/carts' component={Carts} />
          <Route path='/homes' component={Homes} />
          <Route path='/storage' component={Storage} />
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
