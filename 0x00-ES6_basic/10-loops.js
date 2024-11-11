export default function appendToEachArrayValue(array, appendString) {
  // Create a new array to store the modified values
  const updatedArray = array.map(value => appendString + value);

  return updatedArray;
}
