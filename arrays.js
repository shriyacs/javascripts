// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
var containsTwice = function (element,arr) {
  var count = 0;
  for(var i = 0; i<arr.length;i++)
  {
    if(element == arr[i])
    {
      count++;
    }
  }
  if(count == 2)
  return true;
  else 
  return false;
};


// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//
var containsNTimes = function (noOfTimes,element,arr) {
  var count = 0;
  for(var i = 0; i<arr.length;i++)
  {
    if(element == arr[i])
    {
      count++;
    }
  }
  if(count == noOfTimes)
  return true;
  else 
  return false;
};


// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//
var atLeastOneEven = function (arr) {
  var count = 0;
  while(Array.isArray(arr)){
  for(var i = 0; i<arr.length;i++)
  {
    if(arr[i]%2 === 0)
    {
      count++;
    }
  }
  if(count>=1)
  {
    return true;
  }
  else
  return false;
  }
  return "Enter a numberical array!";
};


// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function (arr) {
  var yes=0,no=0;
  while(Array.isArray(arr)){
    for(var i = 0;i<arr.length;i++){
      if(typeof(arr[i]) != "string")
      {
        no++;
      }
      else
      yes = 1;
    }if(no>=1)
  return false;
  else
  return true;
  }
  return "Enter an array!";
};


// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//
//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//

var containsAnyTwice = function (arr1,arr2) {
  let yes = 0;
  while(Array.isArray(arr1) && Array.isArray(arr2))
  {
    for(var i=0;i<arr1.length;i++)
    {
      if(containsTwice(arr1[i],arr2))
      {
        yes++;
      }
    }
    if(yes>=1)
    return true;
    else
    return false;
  }
  return "Enter arrays!";
};


// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function (arr) {
  let arr2=[];
  while(Array.isArray(arr))
  {
    for(var i=0;i<arr.length;i++)
    {
      if(containsTwice(arr[i],arr))
      {
        while(arr2.indexOf(arr[i])==-1)
        {
          arr2.push(arr[i]);
        }
      }
    }
    return arr2;
  }
  return "Enter array!";
};


// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
var range = function (begin,end) {
  var arr=[]
  while(typeof(begin)=="number",typeof(end)=="number")
  {
    if(begin<end) {
    for(var i=begin;i<=end;i++)
    {
      arr.push(i);
    }}
    if(begin>end) {
    for(var j=begin;j>=end;j--)
    {
      arr.push(j);
    }
    }
    return arr;
  }
  return "Expected numbers for begin and end values";
};
