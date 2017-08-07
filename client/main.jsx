import React from 'react';
// define and export our Layout component
export const Layout = ({ content }) => (
  <div>
    <div className="container-fluid">
      <div className="row">{content}</div>
    </div>
  </div>
)
