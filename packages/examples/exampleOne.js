import React, { Component } from 'react';
import { UserName } from '@react-components/user-info/userName/userName'
import { UserCity } from '@react-components/user-info/userCity/userCity'

class ExampleOne extends Component {
  render() {
    return (
      <div className="App">
        <h3>Example 1 - A simple HOC</h3>
        <UserName />
        <UserCity />
      </div>
    );
  }
}

export default ExampleOne;
