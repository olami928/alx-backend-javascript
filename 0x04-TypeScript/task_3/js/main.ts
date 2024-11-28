import { RowID, RowElement } from "./interface";

import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Dimeji",
  lastName: "Alabi",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ....row, age: 22 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
