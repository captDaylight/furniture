const express = require('express');
const path = require('path');
const router = express.Router();

// all pages will be handled by the react app
router.get([
	'/',
	'/mat',
], (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = router;
