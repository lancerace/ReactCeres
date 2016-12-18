'use strict';

import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory, IndexRedirect } from 'react-router';
import ReactDOM from 'react-dom';
import Settings from './components/Settings';
import AddPlant from './components/AddPlant';
import DashBoard from './components/DashBoard';
import Login from './components/Login';

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#"><img src="../assets/ceres-logo2.png"/></a>
        </div>{/* /.navbar-header */}
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
              <li>
                <Link to="/plants" activeClassName="active">
                  <i className="fa fa-dashboard fa-fw" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/plants/new" >
                  <i className="fa fa-plus fa-fw" /> Add a new plant..
                </Link>
              </li>
              <li>
                <Link to="/plants/settings">
                  <i className="fa fa-gear fa-fw"></i> Settings
                </Link>
              </li>
               <li>
                <Link to="/plants/logout">
                  <i className="fa fa-sign-out fa-fw"></i> Logout
                </Link>
               </li>
            </ul>
          </div>
          {/* /.sidebar-collapse */}
        </div>
        {/* /.navbar-static-side */}
      </nav>  
    );
  }
});



/*
React Router 
1. references: 
http://stackoverflow.com/questions/25086832/how-to-stop-in-browser-with-react-router
http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually

2.history documentation: https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory

router history has two type of objects. 
1. hashHistory for configuring without server. convention of url comes with #/
2. BrowserHistory which is used for production that uses history API built into the browser to manipulate the URL through DOM window object such as window.histoy.back(),window.historyforward() 
which mainly for client side user to go back and forward button for navigation purposes. In general,provides a cleaner url and for server-side rendering support


Coding note
=================
seem to be mandatory to set default path of "/",else routing does not work

if react router not working as expected,it might be because of browserHistory via 
http://stackoverflow.com/questions/35063095/react-router-browserhistory-not-working-as-expected/38585657#38585657
*/
var App = React.createClass({
    render: function () {     
      return(
        <div>
          <Nav/>      
          {this.props.children}
        </div>
      )
    }
});
ReactDOM.render(
  <Router history={browserHistory}>      
    <Route path="/">
      <IndexRedirect to="plants"/>      
      
      <Route path="plants" components={App}> 
        <IndexRoute components={DashBoard}/>
        <Route path="new" components={AddPlant}/>
        <Route path="settings" components={Settings}/>    
      </Route>  
      
      <Route path="login" components={Login}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
