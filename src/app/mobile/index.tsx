import React from 'react';
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import fetch from '../../util/axios/axios'

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

  public componentDidMount() { }

  public getLocation = async () => {
    const key = '778490c1c9526f65dd311fad82e18e03';
    const ip = '192.168.16.66';
    // axios.get(`https://restapi.amap.com/v3/ip?key=${key}&output=JSON`)
    // .then((res) => {
    //   console.log(res);
    //   alert(res.data.city);
    // })
    // axios.get(`https://restapi.amap.com/v3/ip`, {
    //   params: {
    //     key
    //   }
    // })

    const data = await fetch({
      method: 'get',
      url: 'https://restapi.amap.com/v3/ip',
      data: {
        key,
      }
    })

    console.log(data)
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

