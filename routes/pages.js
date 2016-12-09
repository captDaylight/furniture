const express = require('express');
const router = express.Router();

// all pages will be handled by the react app
router.get([
	'/',
], (req, res, next) => res.render('../index'));


module.exports = router;
