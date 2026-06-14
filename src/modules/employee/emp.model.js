const db = require('../../config/db');

const EmpDb = {
  getAll: (callback) => {
    const sql = "select * from employee emp" 
    +" left join employee_address emp_addr"
    +" on emp.id = emp_addr.employee_id"
    +" left join address addr"
    +" on addr.id=emp_addr.address_id;";
    db.query(sql, callback);
  }
};

module.exports = EmpDb;
