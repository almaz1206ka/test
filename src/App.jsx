import React from 'react';
import './App.css';
import { Profile } from "./component/Profile"
import { Layout } from './component/Layout';

function App() {
  return (
    <div className="App">
      123
      <textarea></textarea>
      <div className='square'>
        <div className='children'><Profile /></div>
        <div className='children'><Profile /></div>
        <div className='children'><Profile /></div>
      </div>
      <h1>Hello World!</h1>
      <Layout />
      </div>
  );
}

export default App;
