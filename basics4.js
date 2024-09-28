// Arrays

const arr=[1,2,4,5,6]

/*

Some properties of arrays;

1- The arrays created are resizable

2- Any single array can contain many datatypes

      Eg-  arr=[1,2,"hi"]

3- It has 0 based indexing

4- All the copy operations of the array create a shallow copy.

*** Shallow copies are those which have the same references as originals.
    Deep copies are those which doesn't have same references.

*/

const arr2= new Array(1,2,3,4,5)

// Some methods used in arrays

arr.push(6)  //Add values in the array

arr.pop()   // Remove the last value from the array

arr.unshift(10)   // add an element in the first place of the array

arr.shift()  // remove the element from the first place of the array

arr.includes(20)   // check whether the given value is present inside the array

arr.indexOf(2)  // gives index of the value else it returns -1

const newArr= arr.join()  // makes a copy of the previous array but the datatype is string

arr.slice(1,3)  // it returns the values from the array but the real array remains same

arr2.splice(1,3)  // it returns the values from the array [1,3] (1 and 3 included) but the spliced array is removed from the original array


