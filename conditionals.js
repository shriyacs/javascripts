// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (password) {
  var length = password.length;
  if(length >= 10)
  {
    return "strong";
  }
  else if(length >= 7 && length<10)
  {
    return "medium";
  }
  else {
    return "weak";
  }
};

// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {
  while(typeof(year) == "number")
  {
    return year%4===0 && (year%400===0 || year%100!==0)
  }
  console.log("Thats not a number");
};

// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (word1,word2,word3) {
  while(typeof(word1)=="string" && typeof(word2)=="string" && typeof(word3)=="string")
  {
    if(word1.charAt(0)<word2.charAt(0) && word1.charAt(0)<word3.charAt(0)) return word1;
    if(word2.charAt(0)<word1.charAt(0) && word2.charAt(0)<word3.charAt(0)) return word2;
    if(word3.charAt(0)<word1.charAt(0) && word3.charAt(0)<word2.charAt(0)) return word3;
  }
  console.log("All three arguments must be STRINGS!")
};

// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (htmlTag) {
  var openTagStart = htmlTag.indexOf("<")+1;
  var openTagEnd = htmlTag.indexOf(">");
  var openTag = htmlTag.slice(openTagStart,openTagEnd);
  var closeTagStart = htmlTag.lastIndexOf("<")+2;
  var closeTagEnd = htmlTag.lastIndexOf(">");
  var closeTag = htmlTag.slice(closeTagStart,closeTagEnd);
  if(openTag == closeTag)
  {
    return openTag;
  }
  else {
    return "Error:Not an HTML Element";
  }
};

// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (s) {
  while(typeof(s) == "string")
  {
    s = s.split("");
    var l = s.length;
    if(s[l-1]=="?")
    {
      return true;
    }
    else
    {return false;}
  }
  return "Enter a string!";
};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (interjection,indexVal,stringVal) {
  var beginning = stringVal.slice(0,indexVal);
  var end = stringVal.slice(indexVal,stringVal.length);  
  if(typeof(interjection) != "string" || typeof(indexVal) != "number" || typeof(stringVal) != "string")
  {
    return "Expected first argument to be the interjection string, second argument to be number and third argument to be a string";
  }
  else if((indexVal < stringVal.length) != 1)
  {
    return "Number exceeds string length";
  }
  while(indexVal < stringVal.length) {
  return beginning + "-" + interjection + "-" + end;
  }
};

// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (str) {
  var randomNumber = Math.floor(Math.random() * str.length);
  var randomMsgs = ["cool","nice","lol","haha","wow","omg"];
  var randomMsg = randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
  return interjectAt(randomMsg,randomNumber,str);
};
