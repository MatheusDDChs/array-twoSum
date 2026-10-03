const numbs: number[] = [2, 7, 14, 19, 10, 32];

numbs.push(46);

let last = numbs.length - 1;

// console.log("Last number:" + last);

numbs.pop(); //Removes last...

numbs.unshift(1); //Adds at start...

numbs.shift(); // Only removes the first one...

// numbs.splice(5);  Actual state of array: [2, 7, 14, 19, 10]

console.log(numbs.sort((a, b) => a - b)); // [2, 7, 10, 14, 19, 32]
console.log(numbs.sort((a, b) => b - a)); // [32, 19, 14, 10, 7, 2]

numbs.reverse(); //Looks like the last sort...
