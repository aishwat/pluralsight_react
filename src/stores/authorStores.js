"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';
var _authors = [];


var AuthorStore = assign({}, EventEmitter.prototype, {
	addChangeListener : function(callback){
		this.on(CHANGE_EVENT,callback);
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	getAllAuthors: function(){
		return _authors;
	},

	getAuthorById: function(id){
		return _.find(_authors,{id:id});
	}
});

Dispatcher.register(function(action){
	console.log(action);
	switch(action.actionType){
		case ActionTypes.INITIALIZE:
			console.log("dispatcher received INITIALIZE");
			_authors = action.initialData.authors;
			AuthorStore.emitChange();
			break;
		case ActionTypes.CREATE_AUTHOR:
			console.log("dispatcher received CREATE_AUTHOR");
			_authors.push(action.author); //from payload
			AuthorStore.emitChange();
			break;
		case ActionTypes.UPDATE_AUTHOR:
			console.log("dispatcher received UPDATE_AUTHOR");
			var existingAuthor = _.find(_authors,{id: action.author.id});
			var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
			_authors.splice(existingAuthorIndex,1, action.author);
			AuthorStore.emitChange();
			break;
		case ActionTypes.DELETE_AUTHOR:
			debugger;
			console.log("dispatcher received DELETE_AUTHOR");
			_.remove(_authors,function(author){
				return action.id === author.id;
			})
			AuthorStore.emitChange();
			break;
		default:
			//no op
		}
	});

module.exports = AuthorStore;