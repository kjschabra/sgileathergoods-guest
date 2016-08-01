import {ProductsCollection} from '../common/collections.js'

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('productsCollection', function() {
    return ProductsCollection.find();
  });
}
