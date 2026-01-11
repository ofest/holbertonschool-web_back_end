const http = require('http');
const fs = require('fs');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
