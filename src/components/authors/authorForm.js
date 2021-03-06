"use strict"; 
 var React = require('react');
 var Input = require('../common/textInput');

 class AuthorForm extends React.Component{

 	render(){
 		return(
 			<form>
 				<h1>Manage Author</h1>
 				<Input 
 					name="firstName"
 					label="First Name"
 					placeholder ="First Name"
 					value={this.props.author.firstName}
 					onChange={this.props.onChange}
 					error = {this.props.errors.firstName}/>
				<Input 
					name="lastName"
					label="Last Name"
					placeholder ="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange}
					error = {this.props.errors.lastName}/>

 				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>

 			</form>
 		);
 	}
 }
 AuthorForm.propTypes =  {
		author:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
},

 module.exports = AuthorForm;