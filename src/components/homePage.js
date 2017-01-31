"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

class Home extends React.Component{
	render(){
		return(
			<div className="jumbotron">
			<h1>Pluralsight Administrator</h1>
			<p>React, React Router, and Flux </p>
			<Link to="about" className="btn btn-primary btn-lg">Larn More</Link>
			</div>
		);
	}
}

module.exports = Home;