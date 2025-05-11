const db = require('../../config/db');

const EmpDb = {
  getRecord: (data, callback) => {
    const sql = 'SELECT * FROM Employee WHERE id = ?';
    db.query(sql, [data.id], callback);
  },
  getAll: (callback) => {
    const sql = 'SELECT * FROM Employee';
    db.query(sql, callback);
  }
};

module.exports = EmpDb;
