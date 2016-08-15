import { Meteor } from 'meteor/meteor';
import {ProductsCollection} from '../common/collections.js'

Meteor.startup(() => {
  // code to run on server at startup
  var productsLen = ProductsCollection.find({}).count();

  if (productsLen === 0){
    ProductsCollection.insert({
      productName:"test",
      testRecord:true,
      addedOn: new Date(),
      productDescription: "Kobe Bryant aka BLACK MAMBA",
    })
  }

});
