export default function createIteratorObject(report) {
  const allEmployees = Object.values(report).flat();
  return allEmployees[Symbol.iterator]();
}
