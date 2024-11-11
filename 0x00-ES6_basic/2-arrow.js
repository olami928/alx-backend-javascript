export default function getNeighborhoodsList() {
  // Initialize the list of neighborhoods
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Arrow function automatically binds `this`, no need for `self`
  this.addNeighborhood = (newNeighborhood) => {
    // Add the new neighborhood to the list
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
