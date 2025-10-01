const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

/*
Challenge A:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/

// HINT:
// To find the lowest and highest you can use Math.min and Math.max.
// You have to pass in numbers to each of those methods, but they need to be
// individual numbers, not an array of numbers.
// Think how you can expand an array of numbers into its individual variables!

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

function findPriceExtremes(arr) {
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  console.log(`The highest average share price was ${highest}`); // The highest average share price was 126.1
  console.log(`The lowest average share price was ${lowest}`); // The lowest average share price was 89.4
}

/*
Challenge B:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

findPriceExtremes([
  ...averageSharePriceByMonthQ1,
  ...averageSharePriceByMonthQ2,
  ...averageSharePriceByMonthQ3,
  ...averageSharePriceByMonthQ4,
]);
