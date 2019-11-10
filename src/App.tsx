import React from 'react';
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from 'redux';
import './App.css';
import allActions from './store/allActions';
import Router from './router/router'


interface IProps{
  number:number;
  add: () => void;
}
class App extends React.Component<IProps> {
  public render() {
    return(
      <Router />
    )
  }

  public  addNum  = () => {
    this.props.add();
  }
}
const mapStateToProps = (state:any) => {
  return {
    number: state.index.number
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  add: allActions.counter.add
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

