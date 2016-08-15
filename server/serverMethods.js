import {Mongo} from 'meteor/mongo';
import {ProductsCollection, ProductImages} from '../common/collections.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  numberOfTotalProducts() {
    return ProductsCollection.find({deleted:false, hidden: false}).count();
  }
});
