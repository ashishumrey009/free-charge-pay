import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './component/ProductScreen'
import CharacterItem from './component/CharacterItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sucess from './component/sucess'
function App() {
  return (
    // <div className="App">
    //  <Product />
    // </div>
    <>
    <Router>
       
        <Switch>
          <Route path="/" exact component={Product} />
        //  <Route path='/:id' component={CharacterItem} />
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
