const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const empRoutes = require('./modules/employee/emp.routes');
app.use('/api/employee', empRoutes);        // base path

module.exports = app;
