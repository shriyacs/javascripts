// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (number) {
  if(number%3===0)
  return true;
  else
  return false;
};


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (celsValue) {
  return ((celsValue*9)/5) + 32;
};

var fahrToCels = function (farValue) {
  return ((farValue-32)*5) / 9
};



// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (number) {
  return Math.floor(Math.random() * number);
};

// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (suitName) {
  var suits = ["diamond","hearts","spades","club"];
  suitName = suitName.toLowerCase();
  if (suits.indexOf(suitName) != -1) {
    return true;
  }
  else {
    return false;
  }
};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (rankValue) {
  ranks = ["two","three","four","five","six","seven","eight","nine","ten","jack","king","queen","ace"];
  rankValue = rankValue.toLowerCase();
  if(ranks.indexOf(rankValue) != -1)
  {
    return true;
  }
  else {
    return false;
  }
};

// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (rank,suit) {
  var isRankValue = isRank(rank);
  var isSuitValue = isSuit(suit);
  if(isRankValue === true && isSuitValue === true)
  {
    return true;
  }
  else {
    return false;
  }
};

// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (s) {
  return s[0]==s[0].toUpperCase();
};

// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (html) {
  var start=html.indexOf(">")+1;
  var end=html.lastIndexOf("<");
  return html.slice(start, end);
};

// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (string) {
  var openTagStart = string.indexOf("<")+1;
  var openTagEnd = string.indexOf(">");
  var closeTagStart = string.lastIndexOf("<")+2;
  var closeTagEnd = string.lastIndexOf(">");
  var openTag = string.slice(openTagStart,openTagEnd);
  var closeTag = string.slice(closeTagStart,closeTagEnd);
  if(openTag == closeTag)
  {
    console.log("true");
  }
  else {
  console.log("false");
  }
};