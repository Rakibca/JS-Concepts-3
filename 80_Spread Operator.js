const lunchMenu = [
  'Greek Salad',
  'Open Sandwich',
  'Parsnip Soup',
  'Flatbread and Dip',
];
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry'];
const sweetMenu = [
  'Mixed Berry Ice Cream',
  'Chocolate Brownie',
  'Orange Cheesecake',
];

console.log(...lunchMenu); // Greek Salad Open Sandwich Parsnip Soup Flatbread and Dip
console.log(lunchMenu); // ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']

const eventMenu1 = [...lunchMenu];
console.log(eventMenu1); // ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']

const eventMenu2 = [...lunchMenu, ...dinnerMenu, ...sweetMenu];
console.log(eventMenu2); // ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip', 'Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry', 'Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']
// The above is a shallow copy

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const lunchMenu2 = [
  'Greek Salad',
  'Open Sandwich',
  'Parsnip Soup',
  'Flatbread and Dip',
];
const dinnerMenu2 = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry'];
const sweetMenu2 = [
  ['Mixed Berry Ice Cream', 'Chocolate'],
  'Chocolate Brownie',
  'Orange Cheesecake',
];
const eventMenu3 = [...lunchMenu2, ...dinnerMenu2, ...sweetMenu2];
eventMenu3[8][0] = 'Tutti Frutti';
console.log('sweetMenu', sweetMenu2); // sweetMenu [['Tutti Frutti', 'Chocolate'], 'Chocolate Brownie', 'Orange Cheesecake']
console.log('eventMenu', eventMenu3); // eventMenu ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip', 'Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry', ['Tutti Frutti', 'Chocolate'], 'Chocolate Brownie', 'Orange Cheesecake']
// Notice that 'sweetMenu2' now has 'Tutti Frutti' instead of 'Mixed Berry Ice Cream'
// This is fine, but note that this is a shallow copy
// Same thing is true when working with objects

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const salad1 = {
  name: 'green',
  ingredients: ['lettuce', 'tomato'],
};
const salad2 = { ...salad1 };
salad2.name = 'Greek';
salad2.ingredients[0] = 'Cucumber';

console.log(salad1); // {name: 'green', ingredients: ['Cucumber', 'tomato']}
console.log(salad2); // {name: 'Greek', ingredients: ['Cucumber', 'tomato']}
// The above is also a shallow copy
// Here is the problem, notice that 'lettuce' has disappeared and is replaced by 'Cucumber' in salad2 and also in salad1
