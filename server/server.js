import { Meteor } from 'meteor/meteor';
import {ProductsCollection} from '../common/collections.js'

Meteor.startup(() => {
  // code to run on server at startup
  var productsLen = ProductsCollection.find({}).count();

  if (productsLen === 0){
    Products.insert({
      name:"test",
      testRecord:true,
      addedOn: new Date(),
      imageUrl: "https://en.wikipedia.org/wiki/Kobe_Bryant#/media/File:Kobe_Bryant_warming_up.jpg",
      description: "Kobe Bryant aka BLACK MAMBA",
      size: "6ft 5inches",
    })
  }

});
