const express = require('express');
const router = express.Router();
const path = require('path');

// all pages will be handled by the react app
router.get([
	'/',
], (req, res, next) =>  res.sendFile(path.join(__dirname, '../index.html')));

module.exports = router;
