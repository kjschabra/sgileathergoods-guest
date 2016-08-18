import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {ProductsCollection} from '../../common/collections.js'
import Product from './product.jsx';
import Loading from '../components/loading.jsx';
export default class ProductsDisplay extends React.Component {
  componentDidMount() {
    return null;
  }
  loadMoreProducts(event) {
    let limitOfProducts = parseInt(this.props.limitOfProducts),
        totalProducts = parseInt(this.props.totalProducts);
    let numberOfProductsToSub = limitOfProducts + 20;
    if (numberOfProductsToSub >= totalProducts) {
      numberOfProductsToSub = totalProducts;
    }
    this.props.limitOfProducts = numberOfProductsToSub;
    Meteor.subscribe("productsCollection", numberOfProductsToSub);
  }
  renderLoadMore() {
      let limitOfProducts = parseInt(this.props.limitOfProducts),
          totalProducts = parseInt(this.props.totalProducts);
      let numberOfProductsToSub = limitOfProducts + 20;
      if (numberOfProductsToSub >= totalProducts) {
        numberOfProductsToSub = totalProducts;
      }
      if (limitOfProducts < totalProducts ) {
        return <button className="btn btn-lg btn-primary pull-right" onClick={this.loadMoreProducts.bind(this)}>Load More</button>
      }
  }
  renderProducts() {
    if (this.props.productsLoading) {
      return <Loading/>
    } else {
      return this.props.products.map((product) => (<Product key={product._id} data={product}/>));
    }
  }
  render() {
    return <div>
      <div className="col-md-12">
        {this.renderProducts()}
      </div>
      <div className="col-md-12">
        {this.renderLoadMore()}
      </div>
    </div>
  }
}
ProductsDisplay.propTypes = {
  //products: PropTypes.array.isRequired,
}
export default ProductsDisplay = createContainer(props => {
  // props here will have `main`, passed from the router
  // anything we return from this function will be *added* to it
  let limit = 50,
    sub = Meteor.subscribe('productsCollection', limit),
    product = ProductsCollection.find({
      deleted: false,
      hidden: false
    }, {
      sort: {
        addedOn: -1
      }
    }).fetch();
  let sub2 = Meteor.subscribe("countOfProducts"),
    numberOfProducts = Counts.get('numberOfProducts');

  return {
    products: product,
    productsLoading: (!sub.ready()),
    limitOfProducts: limit,
    totalProducts: numberOfProducts,
  };
}, ProductsDisplay);
