import {ProductsCollection, ProductImages} from '../common/collections.js'
import {Meteor} from 'meteor/meteor';
import {Mongo, Collection} from 'meteor/mongo';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('productsCollection', function(limit) {
    return ProductsCollection.find({
      deleted: false,
      hidden: false
    }, {
      sort: {
        addedOn: -1
      },
      limit: (limit || 50)
    })
  });
  Meteor.publish('productImagesById', function(imageId) {
    return ProductImages.find({_id: imageId});
  });
  Meteor.publish('countOfProducts', function() {
    Counts.publish(this, 'numberOfProducts', ProductsCollection.find({hidden: false, deleted: false } ) );
  });
}

ProductImages.allow({
  insert: function(userId, file) {
    return false
  },
  update: function(userId, file) {
    return false
  },
  remove: function(userId, file) {
    return false
  },
  download: function() {
    return true;
  }
});
