import React, {Component, PropTypes} from 'react';
export default class Loading extends React.Component {
  render() {
    return <div className="row" style={{padding:30+"px"}}>
      <div className="col-md-12 text-muted text-center">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    </div>
  }
}
