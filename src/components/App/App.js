import React, { Component } from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


export default class App extends Component {
  return (
    <div className="App">
      <h1>ravenous</h1>
        <SearchBar />
        <BusinessList/>
    </div>
  );
};


