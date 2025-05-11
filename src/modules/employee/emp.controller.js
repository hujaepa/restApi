const EmpDb = require('./emp.model');
//create employee
exports.addEmp = (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ error: 'employee id is required' });
  }

  EmpDb.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Successfully created employee', id: result.insertId });
  });
};

//get all employee
exports.getAll = (req, res) => {
  EmpDb.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
