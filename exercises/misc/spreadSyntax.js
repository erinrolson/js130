// refactor the function invocation so each elements does not need to be accessed
// by index

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

let fullName = ['James', 'Tiberius', 'Kirk'];
console.log(formatName(...fullName)); // formatName('James', 'Tiberius', 'Kirk');
//console.log(formatName(fullName[0], fullName[1], fullName[2]));
// logs: Kirk, James T.