// "use strict";
/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.
var React = require('react');
var Header = require('./common/header.js'); 
var RouteHandler = require('react-router').RouteHandler;  
$ = jQuery = require('jquery');

class App extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				<div className = "container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);
	}
}

module.exports = App;