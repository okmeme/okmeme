import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
@import "@material/top-app-bar/mdc-top-app-bar";


class App extends Component {
  render() {
    return (
      <div className="App">
				<header class="mdc-top-app-bar">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
      <span class="mdc-top-app-bar__title">Title</span>
    </section>
  </div>
</header>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload. (beep)
//         </p>
      </div>
    );
  }
}

export default App;
