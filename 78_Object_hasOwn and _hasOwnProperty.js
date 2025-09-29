const user1 = {
  username: 'rpchan',
  subscriptionLevel: 'bronze',
};

const user2 = {
  username: 'bcstevens',
  subscriptionLevel: 'silver',
  accessPremiumFeature: true,
};

console.log(user1.hasOwnProperty('accessPremiumFeature')); // false
console.log(user2.hasOwnProperty('accessPremiumFeature')); // true

// using new static method called 'hasOwn'
console.log(Object.hasOwn(user1, 'accessPremiumFeature')); // false
console.log(Object.hasOwn(user2, 'accessPremiumFeature')); // true

/*
Challenge:
1. Write logic to check if the object has the property. 
   Do this challenge twice, once with hasOwn and once 
   with hasOwnProperty. All the function need do is return
   a boolean. 
   Bonus: use short circuiting to only return true if 
   'accessPremiumFeature' both exists AND is true.
*/

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

// using 'hasOwnProperty'
function canAccessPremiumFeature(userObj, prop) {
  return userObj.hasOwnProperty(prop);
}
console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature')); // false
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')); // true

// BONUS section using 'hasOwnProperty'
function canAccessPremiumFeature(userObj, prop) {
  return userObj.hasOwnProperty(prop) && userObj[prop]; // we use bracket notation, dot notation will not work.
}
console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'));
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature'));

// using 'hasOwn' and answer for BONUS section
function canAccessPremiumFeature(userObj, prop) {
  return Object.hasOwn(userObj, prop) && userObj[prop]; // we use bracket notation, dot notation will not work.
}
console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'));
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature'));

//////////////////////////////////
// EXTRA NOTES ABOUT THIS TOPIC //
//////////////////////////////////

const user3 = Object.create(null); // create a pure object, has no methods
user3.username = 'Tom';
console.log(user3.hasOwnProperty('username')); // TypeError: user3.hasOwnProperty is not a function. This is because hasOwnProperty method does not exist on user3
console.log(Object.hasOwn(user3, 'username')); // true. This is because user3 is set to Tom
