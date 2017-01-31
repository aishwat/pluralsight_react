"use strict";

var React = require('react');

class About extends React.Component{
	// static willTransitionTo(transition,params,query,callback){
	// 	if(!confirm('Want to read this boring page?')) {
	// 		transition.abort();
	// 	}else{
	// 		callback();
	// 	}
	// }
	render() {
		return (
			<div>
				<h1>About</h1>
				<div>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</div>
			</div>
		); 
	}
};
// About.willTransitionTo = function(transition,params,query,callback){
// 		if(!confirm('Want to read this boring page?')) {
// 			transition.abort();
// 		}else{
// 			callback();
// 		}
// }
// About.willTransitionFrom = function(transition,component){
// 		if(!confirm('Sure want leave this page?')) {
// 			transition.abort();
// 		}
// }
module.exports = About;




