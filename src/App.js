import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating';
import JumbotronComponent from './JumbotronComponent';
import UserForm from './UserForm';

function App() {
  const isValid = true;
  return (
    <div>
        Learn React Hooks
        <UserForm/>
        <br/>
        <br/>
        {/* <Products/>
        <Button variant="danger" disabled={!isValid}>Default</Button>

        <JumbotronComponent>
        This is a long sentence, and I want to insert content into the
        jumbotron component from the outside
        </JumbotronComponent>     */}
      
    </div>
  );
}

export default App;
