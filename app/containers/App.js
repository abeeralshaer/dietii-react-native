import {connect} from 'react-redux';
import React,{Component}from 'react';
import {OpenAppStack} from '../navigators/AppNavigator.js';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/user.js';

const mapStatetoProps = (state) =>{
  return {
    nav: state.nav
  };
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {actions} = this.props;
    return (
      <OpenAppStack
       {...actions} />
    );
  }
}

const AppwithState= connect(mapStatetoProps,mapDispatchtoProps)(App);

export default AppwithState;
