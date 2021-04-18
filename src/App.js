import { MDBContainer } from 'mdbreact';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Retrieve from './components/Retrieve/Retrieve';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <MDBContainer>
          <div className="text-center mt-3"><h1>CRUD - Exam</h1></div>
          <Switch>
            <Route path="/create/"><Form /></Route>
            <Route path="/update/:id"><Form /></Route>
            <Route path="/" exact><Retrieve /></Route>
          </Switch>
        </MDBContainer>
      </div>
    </BrowserRouter>
  )
}
