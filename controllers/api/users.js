var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var User = require('../../models/user')
var Child = require('../../models/child')
var config = require('../../config')

// Returns user object
router.get('/', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.sendStatus(401)
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	User.findOne({email: auth.email}, function (err, user) {
		if (err) { return next(err) }
		res.json(user)
	})
})

// Creates new user account and saves to database
router.post('/', function (req, res, next) {
	var user = new User({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		streetAddress: req.body.streetAddress,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip,
		phone: req.body.phone,
	})

	bcrypt.hash(req.body.password, 10, function (err, hash) {
		if (err) { return next(err) }
		
		user.password = hash
		
		user.save(function (err) {
			if (err) { return next(err) }
			res.sendStatus(201)
		})
	})
})

// Used to update user account information
router.put('/update', function (req, res, next) {
	
	User.findByIdAndUpdate(req.body.id, req.body, function (err, obj) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
      		return res.json(obj);
    	}
    })
})

// Creates new user account and saves to database
router.post('/addChild', function (req, res, next) {

	var adultId = req.body.adultId

	var child = new Child({
		adult: req.body.adultId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		dob: req.body.dob,
		notes: req.body.notes
	})

	child.save(function (err, newChild) {
		if (err) { return next(err) }
		var childId = newChild._id

		User.findByIdAndUpdate(adultId, {$push: {children: childId}}, function (err, obj) {
    		if (err) {
    	  		console.log(err);
    	  		return res.status(400).send(err);
    		} else {
    	  		return res.json(obj);
    		}
    	})

	})

})

module.exports = router