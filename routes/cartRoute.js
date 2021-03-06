

'use strict';

const { Router } = require('express');
const router = Router();
const { postOrderProduct} = require('../controllers/productCtrl');

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

router.post("/cart/:id", postOrderProduct, isLoggedIn);


module.exports = router;