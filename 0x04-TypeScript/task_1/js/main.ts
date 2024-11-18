interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "Madam",
  lastName: "Sece",
  fullTimeEmployee: false,
  location: "Nigeria",
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Olaiya",
  lastName: "Tanimowo",
  location: "Korti",
  fullTimeEmployee: true,
  numberOfReports: 12,
};

interface printTeacherFunction {
  (firstName: string, lastName: string) : string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return (`${firstName[0]}. ${lastName}`);
};

console.log(printTeacher("Oladimeji", "Alabi"));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
  this.firstName = firstName;
  this.lastName = lastName;
}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Oladimeji", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());

console.log(director1)
