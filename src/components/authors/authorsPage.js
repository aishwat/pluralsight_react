"use strict"; 
 var React = require('react');
 var Router = require('react-router');
 var Link = Router.Link;
 // var AuthorApi = require('../../api/authorApi.js');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore= require('../../stores/authorStores');
var AuthorList = require('./authorList.js');


 class Authors extends React.Component{
 	constructor(props) {
	    super(props);
	    this.state = {authors:AuthorStore.getAllAuthors()};
	    this._onChange = this._onChange.bind(this)
	}
	componentWillMount(){
		AuthorStore.addChangeListener(this._onChange);
	}
	componentWillUnmount(){
		AuthorStore.removeChangeListener(this._onChange);
	}
	_onChange(){
		debugger;
		this.setState({authors: AuthorStore.getAllAuthors()});
	}

 	// componentDidMount(){
 	// 	this.setState({authors:AuthorApi.getAllAuthors()});
 	// }
 	render(){
 		return(
 			<div>
 				<h1>Authors</h1>
 				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
 				<AuthorList authors={this.state.authors} />
 			</div>
 		);
 	}
 }

 module.exports = Authors;