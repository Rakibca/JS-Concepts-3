const studentDetails = {
  firstName: 'janaka',
  lastName: 'siriwardena',
  age: 28,
  country: 'sri lanka',
  email: 'j.siri@totalinternet.com',
  discordUsername: 'JS1',
  modulesCompleted: ['html', 'js', 'css'],
};

const deepClonedStudentDetails = structuredClone(studentDetails);
deepClonedStudentDetails.modulesCompleted[0] = 'TS';

console.log(studentDetails); // {firstName: 'janaka', lastName: 'siriwardena', age: 28, country: 'sri lanka', email: 'j.siri@totalinternet.com', discordUsername: 'JS1', modulesCompleted: ['html', 'js', 'css']}
console.log(deepClonedStudentDetails); // {firstName: 'janaka', lastName: 'siriwardena', age: 28, country: 'sri lanka', email: 'j.siri@totalinternet.com', discordUsername: 'JS1', modulesCompleted: ['TS', 'js', 'css']}
// The above is a deep clone. We can still see 'html' in the console for 'studentDetails'.
// In memory 'deepClonedStudentDetails' is a whole new object.
