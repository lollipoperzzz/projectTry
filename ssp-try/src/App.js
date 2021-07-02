import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import '@fontsource/roboto';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/*<div className="app-wrapper-content">*/}
        {/*  <Route path="/users" component={Users}/>*/}
        {/*  <Route path="/products" component={Products}/>*/}
        {/*</div>*/}
      </div>
    </BrowserRouter>
  );
}
export default App;
