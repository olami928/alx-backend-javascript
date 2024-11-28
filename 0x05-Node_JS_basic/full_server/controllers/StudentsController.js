// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.query.db);
      res.status(200).send(`
        This is the list of our students
        Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}
        Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}
      `);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(req.query.db);
      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
