import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {ProductImages} from '../../common/collections.js';
import Loading from '../components/loading.jsx';
export default class Products extends React.Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
    return null;
  }
  displayImage() {
    if (this.props.imageLoading) {
      return <Loading/>;
    } else {
      return <img src={this.props.image.url(store = "images")} alt="" className="img-responsive thumbnail" />;
    }
  }
  render() {
    return <div className="col-md-3">
      {this.displayImage()}
      <h5 className="text-info">{this.props.data.productName}<br/>
        <small className="text-primary">{this.props.data.productSizeLength}in x {this.props.data.productSizeWidth}in x {this.props.data.productSizeVolume}in</small><br/>
      </h5>
      <h5>
        <small className="text-muted">Available in:
          <strong>&nbsp;{this.props.data.productColor}</strong>
        </small>
      </h5>
      <p className="text-muted">{this.props.data.productDescription}</p>
      <h4 className="text-right">
        <span className="label label-primary">{this.props.data.productPrice}</span>
      </h4>
      <hr/>
    </div>
  }
}
// Products.propTypes = {
//
// }
export default Products = createContainer(props => {
  // props here will have `main`, passed from the router
  // anything we return from this function will be *added* to it
  let imageIds = props.data.productImageId,
    productImages = {
      loading: true,
      data: []
    };
  let sub = Meteor.subscribe('productImagesById', imageIds);
  let data = ProductImages.findOne({_id: imageIds});
  return {
    imageLoading: !sub.ready(),
    image: data
  };
}, Products);
