import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { History } from 'history';
import { ConnectedRouter } from 'react-router-redux';
// tslint:disable:no-import-side-effect
import './App.css';
// tslint:enable:no-import-side-effect

import logo from './logo.svg';

interface AppProps {
  history: History;
}

interface StateProps {}

class App extends React.Component<AppProps & StateProps> {
  public render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React + Redux + Saga + TypeScript</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </ConnectedRouter>
    );
  }
}

const selectors = {};

const actions = {};

export default connect(createStructuredSelector(selectors), actions)(App);
