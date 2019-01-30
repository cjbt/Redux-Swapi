import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from './actions';

import { CharacterListView } from './views';
import './styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.getPeople();
    console.log(this.props);
  }
  render() {
    return <CharacterListView characters={this.props.people} />;
  }
}

const mapStateToProps = state => ({
  people: state.charsReducer.characters
});

export default connect(
  mapStateToProps,
  { getPeople }
)(App);

//
