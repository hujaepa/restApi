const EmpDb = require('./emp.model');
exports.testApi =(req,res)=>{
  res.status(201).json({msg:"Masuk"})
}

//get all employee
exports.getAll = (req, res) => {
  EmpDb.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
