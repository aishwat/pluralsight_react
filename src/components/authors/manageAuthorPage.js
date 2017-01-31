"use strict"; 
var React = require('react');
var AuthorForm = require('./authorForm');
// var AuthorApi = require('../../api/authorApi');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore= require('../../stores/authorStores');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	mixins : [
 		Router.Navigation
 	],

 	statics:{
 		willTransitionFrom:function(transition,component){
 			if(component.state.dirty && !confirm('Leave without saving?')){
 				transition.abort();
 			}
 		}
 	},
	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' },
			errors:{},
			dirty:false
		};
	},
	authorFormIsValid:function(){
		var formIsValid = true;
		this.state.errors= {};

		if(this.state.author.firstName.length < 3){
			this.state.errors.firstName = 'First Name Must Be Atleast 3 Characters'
			formIsValid = false;
		}
		if(this.state.author.lastName.length < 3){
			this.state.errors.lastName = 'Last Name Must Be Atleast 3 Characters'
			formIsValid = false;
		}

		this.setState({error:this.state.errors});
		return formIsValid;
	},
	componentWillMount:function(){
		var authorId = this.props.params.id;
		if(authorId){
			this.setState({author:AuthorStore.getAuthorById(authorId)});
		}
	},

	setAuthorState: function(event) {
		this.setState({dirty:true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},

	saveAuthor: function(event) {
		event.preventDefault();
		if(!this.authorFormIsValid()){
			return;
		}
		if(this.state.author.id){
			AuthorActions.updateAuthor(this.state.author);
		}else{
			AuthorActions.createAuthor(this.state.author);
		}
		// AuthorApi.saveAuthor(this.state.author);
		
		this.setState({dirty:false});
		toastr.success('Author saved');
		this.transitionTo('authors');
	},

	render: function() {
		return (
			<AuthorForm
				author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor}
				errors= {this.state.errors}/>
		);
	}
});

// class ManageAuthorPage extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {author:{id:'', firstName:'first', lastName:''}};
// 	}

//  	setAuthorState(event){
//  		var field = event.target.name;
//  		var value = event.target.value;
//  		console.log(this.state.author);
//  		this.state.author[field] = value;
//  		return this.setState({author:this.state.author});
//  	}
//  	saveAuthor(event){
//  		event.preventDefault();
//  		AuthorApi.saveAuthor(this.state.author); 
//  		console.log("in saveAuthor");
//  	}
//  	render(){
//  		return(
//  			<AuthorForm 
// 	 			author={this.state.author}
// 	 			onChange={this.setAuthorState}
// 	 			onSave={this.saveAuthor}/>
//  			);
//  	}
//  }

 module.exports = ManageAuthorPage;