import React from 'react';
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import './index.scss';
import allActions from '../../store/allActions';
import NavBarComponent from '../../components/navBar/navBar'


class Index extends React.Component {
  constructor(props: any) {
    super(props);
    this.state ={
    }
    
  }

  
  public render() {
    return(
      <div className="mobile_index">
        <NavBarComponent />
      </div>
    )
  }

  // static getDerivedStateFromProps(props: any, state: any) {
  //   return '';
  // }


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

