import React from 'react';
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router';


import './navBar.scss';
import allActions from '../../store/allActions';
import {INavBarState, INavBarprops} from './navBar.interface'
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';


class NavBarComponent extends React.Component<INavBarprops, INavBarState> {
  constructor(props: any) {
    super(props);
    this.state ={
      menu: [
        {
          value: '1',
          label: 'Food',
        }, {
          value: '2',
          label: 'Supermarket',
        },
        {
          value: '3',
          label: 'Extra',
          isLeaf: true,
        },
      ],
      show: false,
      initData: [],
    }
  }
  public render() {
    console.log('props', this.props);
    const {menu, show, initData} = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={menu}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return(
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
            icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
          >
            OneLevel menu
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    )
  }

  public onChange = (value: any) => {
    let label = '';
    this.state.menu.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem:any) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }

  public handleClick = (e:any) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: this.state.menu,
        });
      }, 500);
    }
  }

  public onMaskClick = () => {
    this.setState({
      show: false,
    });
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
)(NavBarComponent));

