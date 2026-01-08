const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

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
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
        );
      }

      resolve();
    });
  });
}
;

module.exports = countStudents;
