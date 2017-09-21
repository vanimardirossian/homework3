//A function that takes at least three arguments and returns
//the result of some set of operations using those arguments

const PresentValue = function (FutureValue, r, t) {
  return FutureValue / (1 + r) ** t;
};

//A function that takes no arguments and returns something

const noArguments = function () {
  return "no arguments pls";
};

//A function that takes arguments, does something but does not return anything

const noReturn = function (someArgument, someOtherArgument) {
  (someArgument ** someOtherArgument) ** someArgument
  console.log("DON'T YOU DARE RETURN ANYTHING");
};

//A function called fullName that takes as argument first name
//and last name and returns the full name of the person
//(first name concatenated with last name with a space in between)

const fullName = function (firstName, lastName) {
  return firstName + ' ' + lastName;
};

//A function that takes three strings
//and returns the string that is the longest.

const stringLengths = function (str1, str2, str3) {
  if (str1.length > str2.length && str1.length > str3.length) {
    return str1;
  } else if (str2.length > str1.length && str2.length > str3.length) {
    return str2;
  } else {
    return str3;
  }
};

//A function that takes two numbers and returns 0 if they are equal,
//1 if the first is larger and -1 if the second is larger

const compare = function (num1, num2) {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  }
};

//A function that takes three inputs and returns the first truethy value
//(example:  firstTruethy(0, '', 1); should return 1)

const firstTruethy = function (val1, val2, val3) {
  return val1 || val2 || val3;
};
