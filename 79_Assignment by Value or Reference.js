let firstName = 'Tomas';
let newName = firstName;
newName = 'Thomas';
console.log('firstName', firstName); // firstName Tomas
console.log('newName', newName); // newName Thomas
// The above applies to primitive data types (string, number, boolean, ...)
// A new instance in memory is created for 'newName'

const names = ['Ben', 'Belen', 'Barbara', 'Betty'];
const updatedNames = names;
updatedNames[0] = 'Zoe';
console.log('names', names); // names ['Zoe', 'Belen', 'Barbara', 'Betty']
console.log('updatedNames', updatedNames); // updatedNames ['Zoe', 'Belen', 'Barbara', 'Betty']
// The above applies to arrays and objects
// A new instance in memory is NOT created for 'updatedNames'
