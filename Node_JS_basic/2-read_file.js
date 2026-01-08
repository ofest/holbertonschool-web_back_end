#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(line => line.trim() !== '');
  const headers = lines[0].split(',');
  const fieldIndex = headers.indexOf('field');
  const firstNameIndex = headers.indexOf('firstname');

  const students = lines.slice(1).map(line => line.split(','));
  console.log(`Number of students: ${students.length}`);

  const fields = {};
  students.forEach(student => {
    const field = student[fieldIndex];
    const firstname = student[firstNameIndex];
    if (field && firstname) {
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    }
  });

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
