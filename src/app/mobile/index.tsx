import React from 'react';
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
// import fetch from 'fetch';

import './index.scss';
import allActions from '../../store/allActions';
import NavBarComponent from '../../components/navBar/navBar';
import { Toast, Button } from 'antd-mobile';


class Index extends React.Component {

  public static getDerivedStateFromProps(nextProps: any, prevState: any) {
    console.log('getDerivedStateFromProps')
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    const {type} = nextProps;
    if (type !== prevState.type) {
      return {
          type,
      };
  }
    return null;
  }
  constructor(props: any) {
    super(props);
    this.state ={
    }
    this.checkPermissionPos();

  }

  
  public render() {
    return(
      <div className="mobile_index">
        <Button onClick={this.getLocation}>获取地理位置</Button>
        <NavBarComponent />
      </div>
    )
  }

  public componentDidMount() { 
    const key = '0d9775d27cb42a402768dff0e6ce33d2';
    return '';
  }

  public getLocation = () => {
    return '';
  }

  // 检测是否支持地理定位
  public checkPermissionPos() {
    if (!navigator.geolocation) {
      Toast.fail('该浏览器不支持获取地理位置', 1);
    }
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Index));

