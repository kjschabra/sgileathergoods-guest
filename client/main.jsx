import React from 'react';
// define and export our Layout component
export const Layout = ({ content }) => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">SGI Product Catalog</a>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <div className="row" style={{marginTop: 100 + "px"}}>{content}</div>
    </div>
  </div>
)