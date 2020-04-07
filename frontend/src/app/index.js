import React from 'react';
import './style.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Chat from './pages/chat';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
