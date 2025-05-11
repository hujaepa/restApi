const express = require('express');
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors());

const empRoutes = require('./modules/employee/emp.routes');
app.use('/api/employee', empRoutes);

module.exports = app;
