import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from './actions';
import Dashboard from './components/Dynamic/Dashboard';
import Header from './components/Dynamic/Header';
import Landing from './components/Dynamic/Landing';
import SurveyNew from './components/surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <div className="container">
            <Header />
            <Route exact path="/me"   component={Dashboard} />
            <Route exact path="/"   component={Landing} />
            <Route exact path="/surveys"  component={Dashboard} />
            <Route exact path="/surveys/new"  component={SurveyNew} />
        </div>
      </BrowserRouter>
      </div>
     
    );
  }
}
//connect method links all actions to the component as Props. so you can reference them like props.
export default connect(null, actions)(App);
