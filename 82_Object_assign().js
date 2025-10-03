const studentDetails = {
  firstName: 'janaka',
  lastName: 'siriwardena',
  age: 28,
  country: 'sri lanka',
  email: 'j.siri@totalinternet.com',
  discordUsername: 'JS1',
  modulesCompleted: ['html', 'js', 'css'], // this line added as part of the challenge below
};

const studentDetailsCopy = {};

Object.assign(studentDetailsCopy, studentDetails);

console.log(studentDetailsCopy); // {firstName: 'janaka', lastName: 'siriwardena', age: 28, country: 'sri lanka', email: 'j.siri@totalinternet.com', discordUsername: 'JS1'}

/*
Challenge:
    1. Prove that what we have created here is a shallow copy.
*/

studentDetailsCopy.modulesCompleted[0] = 'react';
console.log(studentDetails); // {firstName: 'janaka', lastName: 'siriwardena', age: 28, country: 'sri lanka', email: 'j.siri@totalinternet.com', discordUsername: 'JS1', modulesCompleted: ['react', 'js', 'css']}
console.log(studentDetailsCopy); // {firstName: 'janaka', lastName: 'siriwardena', age: 28, country: 'sri lanka', email: 'j.siri@totalinternet.com', discordUsername: 'JS1', modulesCompleted: ['react', 'js', 'css']}
// We can see that in both cases above there is 'react' but no sign of 'html'. This proves this is a shallow copy
