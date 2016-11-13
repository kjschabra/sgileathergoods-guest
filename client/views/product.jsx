import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { ProductImages } from '../../common/collections.js';
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
      return <img src={this.props.image.url(store = "images")} alt="" className={this.getProductImgClass()+ " img-responsive thumbnail "}/>;
    }
  }
  displaySize() {
    var length = "",
      width = "",
      volume = "";
    if (this.props.data && this.props.data.productSizeLength && this.props.data.productSizeLength !== "0") {
      length = this.props.data.productSizeLength + "in";
    }
    if (this.props.data && this.props.data.productSizeWidth && this.props.data.productSizeWidth !== "0") {
      width = " x " + this.props.data.productSizeWidth + "in";
    }
    if (this.props.data && this.props.data.productSizeVolume && this.props.data.productSizeVolume !== "0") {
      volume = " x " + this.props.data.productSizeVolume + "in";
    }
    return length + " " + width + " " + volume;
  }
  getProductDesc() {
    if (this.props && this.props.data && this.props.data.productDescription) {
      if (!this.props.data.productDescription.includes('Test')) {
        return this.props.data.productDescription;
      }
    }
  }
  getProductGender() {
    let self = this;
    if (self.props.productGender && self.props.data) {
      let obj = _.where(self.props.productGender, { _id: self.props.data.productGender });
      if (obj[0] && obj[0].name === "Mens") {
        return <span className="label male-bg">
        <i className="fa fa-male"></i>
      </span>
      } else if (obj[0] && obj[0].name === "Women") {
        return <span className="label female-bg">
        <i className="fa fa-female"></i>
      </span>
      } else {
        return <ul className="list-inline">
        <li>
          <span className="label female-bg">
            <i className="fa fa-female"></i>
          </span>
        </li>
        <li>
          <span className="label male-bg">
            <i className="fa fa-male"></i>
          </span>
        </li>
      </ul>
      }
    }
  }
  getProductImgClass() {
    let self = this;
    if (self.props.productCollection && self.props.data) {
      let obj = _.where(self.props.productCollection, { _id: self.props.data.collection });
      if (obj[0] && !_.isEmpty(obj[0])) {
        if (obj[0].name === "Paris Collection") {
          return "collection paris-collection-img-border";
        } else if (obj[0].name === "Safari Collection") {
          return "collection safari-collection-img-border";
        } else if (obj[0].name === "Eternity Collection") {
          return "collection eternity-collection-img-border";
        } else {
          return "collection sgi-brand-img-border";
        }
      }
    }

  }
  render() {
    return <div className=" col-xl-3 col-md-3 col-sm-3 col-xs-6">
      {this.displayImage()}
      <h4 className="text-right">
        <ul className="list-inline">
          <li>{this.getProductGender()}</li>
          <li><span className="label label-primary">{this.props.data.productPrice}</span></li>
        </ul>
      </h4>
      <h5 className="text-info">{this.props.data.productName}<br/>
        <small className="text-primary">{this.displaySize()}</small><br/>
      </h5>
      <h5>
        <small className="text-muted">Available in:
          <strong>&nbsp;{this.props.data.productColor}</strong>
        </small>
      </h5>
      <p className="text-muted">{this.getProductDesc()}</p>
    </div>;
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
    },
    sub = Meteor.subscribe('productImagesById', imageIds);

  return {
    imageLoading: !sub.ready(),
    image: ProductImages.findOne({ _id: imageIds }),
  };
}, Products);