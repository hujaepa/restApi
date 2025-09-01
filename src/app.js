// app.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// routes
const empRoutes = require('./modules/employee/emp.routes');
app.use('/api/employee', empRoutes);

module.exports = app;
