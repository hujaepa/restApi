const db = require('./config/db');
const { faker } = require('@faker-js/faker');

function generateSequentialWorkNum(i) {
  // Format numbers like "0001" to "0100"
  return i.toString().padStart(4, '0');
}

async function seedEmployees(count = 100) {
  for (let i = 1; i <= count; i++) {
    const employee = {
      workNum: generateSequentialWorkNum(i),
      name: faker.person.fullName(),
      department: faker.commerce.department(),
      address1: faker.location.streetAddress(),
      address2: faker.location.city()
    };

    const sql = 'INSERT INTO employee SET ?';
    db.query(sql, employee, (err, result) => {
      if (err) console.error(`❌ Error inserting employee ${employee.workNum}:`, err.message);
      else console.log(`✅ Inserted: ${employee.workNum}`);
    });
  }
}

seedEmployees();
