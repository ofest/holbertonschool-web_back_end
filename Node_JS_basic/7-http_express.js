const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.end('Cannot load the database');
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');

    const firstnameIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    const students = lines.slice(1);

    res.write(`Number of students: ${students.length}\n`);

    const fields = {};

    students.forEach((line) => {
      const values = line.split(',');
      const firstname = values[firstnameIndex];
      const field = values[fieldIndex];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const field in fields) {
      res.write(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`
      );
    }

    res.end();
  });
});

if (require.main === module) {
  app.listen(1245);
}

module.exports = app;
