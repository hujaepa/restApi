const express = require('express');
const router = express.Router();
const EmpController = require('./emp.controller');

router.get('/all', EmpController.getAll);

module.exports = router;
