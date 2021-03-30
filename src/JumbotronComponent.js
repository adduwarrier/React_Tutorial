import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function JumbotronComponent(props){
    return (
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
         {props.children}
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
        );
}

export default JumbotronComponent;
