var express = require('express');
var router = express.Router();

router.route('/posts')
//returns all posts
	.get(function(req, res){
		res.send({message:'TODO return all posts'});
	})

	.post(function(req, res){
		//temporary solution
		res.send({message: 'TODO Create a new post'});
	});

	router.route('/posts/:id')

	//returns a particular post
	.get(function(req, res){
		res.send({message:'TODO return post with ID ' + req.params.id});
		})
	//update existing post
	.put(function(req, res){
		res.send({message:'TODO modify post with Id + ' + req.params.id});
	})
	//delete existing post
	.delete(function(req, res){
		res.send({message:'TODO modify post with Id + ' + req.params.id});
	});

module.exports = router;