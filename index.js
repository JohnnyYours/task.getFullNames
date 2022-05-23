/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
 function getFullNames(users) {
	let fullNames = [];
  for(let i = 0; i < users.length; i++) {
    fullNames.push(`${users[i].firstName} ${users[i].lastName}`);
  }
  return fullNames;
}


// Sample usage - do not modify
let users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];
console.log(getFullNames(users)); // [Sam Blue, Charlie Bon]

