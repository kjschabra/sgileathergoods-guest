import React from 'react';
// define and export our Layout component
export const Layout = ({content}) => (
  <div className="container-fluid">
    <h1 className="text-center">My App</h1>
    <hr/>
    <div>{content}</div>
  </div>
);
