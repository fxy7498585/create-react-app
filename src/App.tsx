import React from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import actions from "./store/actions/counter";
import { Store} from './store/reducers/index.interface'
import './App.css';
import { Button } from 'antd-mobile';


interface IProps{
  number:number,
}
class App extends React.Component<IProps> {
  render() {
    console.log('props', this.props)
    return(
      <div className="App">
      <Button type="warning">warning</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}
let mapStateToProps = function (state:Store) {
  return state
}

export default connect(
  mapStateToProps,
  actions
)(App);

