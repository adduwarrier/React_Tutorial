import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating';

function App() {
  const isValid = true;
  return (
    <div>
      
        Learn React Hooks
        <Products/>
        <Button variant="danger" disabled={!isValid}>Default</Button>
      
      
      
    </div>
  );
}

export default App;
