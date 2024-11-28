interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Dimeji",
  lastName: "Doe",
  age: 22,
  location: "Oyo",
};

const Student2: Student = {
  firstName: "Ajoke",
  lastName: "Alabi",
  age: 20,
  location: "Ogun",
};

const studentlist: Student[] = [student1, student2];

const table = document.createElement("table");
const tableHeaderRow = document.createElement("tr");

const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
tableHeaderRow.appendChild(headerFirstName);

const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
tableHeaderRow.appendChild(headerLocation);

table.appendChild(tableHeaderRow);

studentsList.forEach((student) => {
  const tableRow = document.createElement("tr");
  
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  tableRow.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  tableRow.appendChild(locationCell);

  table.appendChild(tableRow);
));

document.body.appendChild(table);
