const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');
    
    if (lines.length <= 1) throw new Error('No valid student data in file');
    const students = lines.slice(1).filter((line) => line.trim() !== '');
    console.log(`Number of students: ${students.length}`);
    const fields = {};

    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load database');
  }
}

module.exports = countStudents;
