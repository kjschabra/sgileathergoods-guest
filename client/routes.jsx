import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Layout} from './main.jsx';
import ProductsDisplay from './views/products-display.jsx';
import {DocHead} from 'meteor/kadira:dochead';


DocHead.addMeta({name:"viewport", content:"width=device-width, initial-scale=1, "} );

FlowRouter.route("/", {
  name: 'Welcome',
  action() {
    mount(Layout, {content: <ProductsDisplay /> });
  }
});
