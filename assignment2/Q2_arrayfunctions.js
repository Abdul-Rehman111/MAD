/*concat(): Combines two or more arrays into a new array. */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

/*push(): Adds one or more elements to the end of an array and returns the new length of the array. */
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

/*pop(): Removes the last element from an array and returns that element. */
const arr4 = [1, 2, 3, 4];
const lastElement = arr4.pop();
console.log(lastElement); // Output: 4
console.log(arr4); // Output: [1, 2, 3]

/*shift(): Removes the first element from an array and returns that element. */
const arr5 = [1, 2, 3];
const firstElement = arr5.shift();
console.log(firstElement); // Output: 1
console.log(arr5); // Output: [2, 3]

/*unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array. */
const arr6 = [1, 2, 3];
arr.unshift(0);
console.log(arr6); // Output: [0, 1, 2, 3]

/*slice(): Returns a portion of an array into a new array. */
const arr7 = [1, 2, 3, 4, 5];
const slicedArray = arr7.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]

/*splice(): Adds or removes elements from an array at a specified index. */
const arr8 = [1, 2, 3, 4];
arr.splice(1, 2, 5, 6);
console.log(arr8); // Output: [1, 5, 6, 4]

/*reverse(): Reverses the order of the elements in an array. */
const arr9 = [1, 2, 3, 4];
arr9.reverse();
console.log(arr9); // Output: [4, 3, 2, 1]

/*sort(): Sorts the elements in an array. */
const arr10 = [3, 2, 1, 4];
arr10.sort();
console.log(arr10); // Output: [1, 2, 3, 4]

/*map(): Creates a new array with the results of calling a provided function on every element in the original array. */
const arr11 = [1, 2, 3];
const mappedArray = arr11.map(element => element * 2);
console.log(mappedArray); // Output: [2, 4, 6]

/*filter(): Creates a new array with all elements that pass the test implemented by the provided function. */
const arr12 = [1, 2, 3, 4];
const filteredArray = arr12.filter(element => element % 2 === 0);
console.log(filteredArray);//Output: [2, 4]
