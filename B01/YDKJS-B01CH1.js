//➜ 1... what is a program?
//• A program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks to perform.

//➜ 2... what is syntax?
//• The rules for valid format and combinations of instructions.

//➜ 3... what are statements?
//• In a computer language, a group of words, numbers, and operators that performs a specific task is a statement.

//✱  Example:  demo for statements:
a = b * 2;

//»  Note:  The characters "a" and "b" are called variables.
//»  Note:  The "2" is just the value itself. "literal value"
//»  Note:  The "*" and "=" characters are operators.

//➜ 4... Variables hold values. "we could think of variables as symbolic placeholder for the values themselves"

//➜ 5... Operators : perform actions with the values and variables such as assignment and mathematic multiplication.

//»  Note:  Most statements in JavaScript conclude with a semicolon (;) at the end.

//➜ 6... An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.
//✱  Example:  demo for a statements:
a = b * 2;

//• This statement has four expressions in it:

//• 1. "2" : is a literal value expression.
//• 2. "b" : is a variable expression, which means retrieve its current value.
//• 3. "b * 2" : is an arithmetic expression, which meand to do multiplication.
//• 4. "a = b * 2" : is an assignment expression to the variable "a".

//➜ 7... The most common expression statement is a call expression statement.
//• the entire statement is the function call expression itself:
//✱  Example:  demo for expression statement "function call":
alert(a);

//➜ 8... How does the computer understand our code?
//• a special utility on the computer (either an interpreter or a compiler) is used to translate the code you write into commands a computer can understand.

//➜ 9... For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program
//➜      is run, which is usually called interpreting the code.

//➜ 10... For other languages, the translation is done ahead of time, called compiling the code, so when the program runs later, what’s running
//➜       is actually the already compiled computer instructions ready to go.

//-!  warning:  It’s typically asserted that JavaScript is interpreted,
//-!            because your Java‐ Script source code is processed each
//-!            time it’s run. But that’s not entirely accurate.

//➜ 11... The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.

//➜ 12... "console.log(..)"
//• That’s exactly how we print text in the developer console.
//• The "console." part is an object reference where the "log(..)" function is located.

//➜ 13... "prompt(..)"
//• This function shows a pop-up with the message passed to the function.
//✱  Example:  demo for using prompt(..):
age = prompt('Please tell me your age:');
console.log(age); //the value we type will be stored in the "age" variable.

//➜ 14... Operators are how we perform actions on variables and values.
//• The * operator performs mathematic multiplication.
//• The = equals operator is used for assignment.
//✱  Example:  demo for using "*" and "=" operators:
a = b * 2;

//»  Note:  we first calculate the value on the right-hand side (source value) of the = and then put it
//»         into the variable that we specify on the left-hand side (target variable).

//➜ 15... you’ll need the keyword var in every program, as it’s the primary way you declare variables.
//✱  Example:  demo creating variables using "var" keyword:
var a = 20;
a = a + 1;
a = a * 2;
console.log(a); // 42

//➜ 16... Here are some of the most common operators in JavaScript:

//• Assignment operator : "="
a = 2; //Example

//• Math operators : + (addition), - (subtraction), * (multiplication), and / (division).
a * 3; //Example

//• Compound assignment : +=, -=, *=, and /= are compound operators that combine a math operation with assignment.
a += 2; //both are the same
a = a + 2;

//• Increment/decrement : ++ (increment), -- (decrement)
a++; //both are the same
a = a + 1;

//• Object property access operator : "."
console.log();

//• Equality operator : == (loose-equals), === (strict-equals), != (loose not-equals), !== (strict not-equals).
a == b; //Example

//• Comparison operator : < (less than), > (greater than), <= (less than or loose-equals), >= (greater than or loose-equals).
a <= b; //Example

//• Logical operator : && (and), || (or).
a || b; //that selects either a or b.

//➜ 17... JavaScript has built-in types for each of these so-called primitive values:
//• When you need to do math, you want a "number".
//• When you need to print a value on the screen, you need a "string".
//• When you need to make a decision in your program, you need a "boolean" (true or false).

//➜ 18... Values that are included directly in the source code are called literals.
('I am a string'); //string literal
('I am also a string'); //string literal
42; //number literal
true; //boolean literal
false; //boolean literal

//➜ 19... If you have a number but need to print it on the screen, you need to convert the value to a string,
//➜       and in JavaScript this conversion is called “coercion.”

//➜ 20... JavaScript provides several different facilities for forcibly coercing between types.
//✱  Example:  coercing between types:
var a = '42';
var b = Number(a);
console.log(a); // "42"
console.log(b); // 42

//»  Note:  Using Number(..) (a built-in function) as shown is an explicit coercion from any other type to the number type.

//➜ 21... loose-equals operator and “coercion".
//• if you use the == loose-equals operator to make the comparison "99.99" == 99.99, JavaScript will convert the left-hand side
//• "99.99" to its number equivalent 99.99. The comparison then becomes 99.99 == 99.99, which is of course true.

//➜ 22... In JavaScript, there are two types of comments possible: a single-line comment and a multiline comment.
//✱  Example:  demo for single-line comment and a multiline comment:
// This is a single-line comment
var a = 42; // 42 is the meaning of life

/* But this is
a multiline
comment.
*/
/* The following value is used because
it has been shown that it answers
every question in the universe. */
var a = 42;

//➜ 23... Static typing, otherwise known as type enforcement :
//• 1. In some programming languages, you declare a variable (container) to hold a specific type of value, such as number or string.
//• 2. Typically cited as a benefit for program correctness by preventing unintended value conversions.

//➜ 24... Weak typing, otherwise known as dynamic typing:
//• 1. Other languages emphasize types for values instead of variables.
//• 2. Allows a variable to hold any type of value at any time.
//• 3. It’s typically cited as a benefit for program flexibility by
//•    allowing a single variable to represent a value no matter
//•    what type form that value may take at any given moment in the program’s logic flow.

//»  Note:  JavaScript uses the latter approach, dynamic typing, meaning variables
//»         can hold values of any type without any type enforcement.

//✱  Example:  showing that JavaScript is dynamically typed:
var amount = 99.99;
amount = amount * 2;
console.log(amount); // 199.98
// convert `amount` to a string, and
// add "$" on the beginning
amount = '$' + String(amount);
console.log(amount); // "$199.98"

//➜ 25... Another common usage of variables is for centralizing value setting.
//• 1. This is more typically called constants, when you declare a variable with
//•    a value and intend for that value to not change throughout the program.
//• 2. You declare these constants, often at the top of a program.

//»  Note:  By convention, JavaScript variables as constants are usually capitalized, with underscores _ between multiple words.
//✱  Example:  defining constant "TAX_RATE":
var TAX_RATE = 0.08; // 8% sales tax
var amount = 99.99;
amount = amount * 2;
amount = amount + amount * TAX_RATE;
console.log(amount); // 215.9784
console.log(amount.toFixed(2)); // "215.98"

//»  Note:  toFixed(..) lets us specify how many decimal places we’d like the number rounded to, and it produces the string as necessary.
//»  Note:  The "TAX_RATE" variable is only constant by convention.
//»         there’s nothing special in this program that prevents it from being changed.

//➜ 26... The newest version of JavaScript “ES6” includes a new way to declare constants, by using "const" instead of "var".
// as of ES6:
const TAX_RATE = 0.08;

//»  Note:  constants also prevent accidentally changing value somewhere else after the initial setting.

//»  Note:  If you tried to assign any different value to "TAX_RATE" after that first declaration, your program would reject the change.

//➜ 27... In JavaScript, a block is defined by wrapping one or more statements inside a curly-brace pair { .. }.

var amount = 99.99;
// a general block
{
  amount = amount * 2;
  console.log(amount); // 199.98
}

//➜ 28... blocks are attached to some other control statement, such as an if statement or a loop.

var amount = 99.99;
// is amount big enough?
if (amount > 10) {
  // <-- block attached to `if`
  amount = amount * 2;
  console.log(amount); // 199.98
}

//»  Note:  Unlike most other statements like console.log(amount);, a block statement does not need a semicolon (;) to conclude it.

//➜ 29... There are quite a few ways we can express conditionals in our programs, The most common one is the if statement.

var bank_balance = 302.13;
var amount = 99.99;
if (amount < bank_balance) {
  console.log('I want to buy this phone!');
}

//➜ 30... You can even provide an alternative if the condition isn’t true, called an "else" clause.

const ACCESSORY_PRICE = 9.99;
var bank_balance = 302.13;
var amount = 99.99;
amount = amount * 2;
// can we afford the extra purchase?
if (amount < bank_balance) {
  console.log("I'll take the accessory!");
  amount = amount + ACCESSORY_PRICE;
}
// otherwise:
else {
  console.log('No, thanks.');
}

//➜ 31... The if statement expects a boolean, but if you pass it something that’s not already boolean, coercion will occur.

//➜ 32... JavaScript defines a list of specific values that are considered “falsy” because when coerced to a boolean, they become false—these
//➜       include values like 0 and "".

//➜ 33... Any other value not on the “falsy” list is automatically “truthy”—when coerced to a boolean they become true.

//➜ 34... A loop includes the test condition as well as a block (typically as { .. }).
//➜       Each time the loop block executes, that’s called an iteration.

//➜ 35... For example, the while loop and the do..while loop forms illustrate the concept
//➜       of repeating a block of statements until a condition no longer evaluates to true.

while (numOfCustomers > 0) {
  console.log('How may I help you?');
  // help the customer...
  numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
  console.log('How may I help you?');
  // help the customer...
  numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

//»  Note:  The only practical difference between these loops is whether the conditional is tested
//»         before the first iteration (while) or after the first iteration (do..while).

//»  Note:  For a variety of historical reasons, programming languages
//»         almost always count things in a zerobased fashion, meaning starting with 0 instead of 1.

//➜ 36... We can use JavaScript’s break statement to stop a loop. Also, we can observe that
//➜       it’s awfully easy to create a loop that would otherwise run forever without a breaking mechanism.

var i = 0;
// a `while..true` loop would run forever, right?
while (true) {
  // keep the loop going?
  if (i <= 9) {
    console.log(i);
    i = i + 1;
  }
  // time to stop the loop!
  else {
    break;
  }
}
// 0 1 2 3 4 5 6 7 8 9

//➜ 37... While a while (or do..while) can accomplish the task manually, there’s another syntactic form called a for loop for just that purpose.

for (var i = 0; i <= 9; i = i + 1) {
  console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9

//»  Note:   The for loop has three clauses:
//• the initialization clause (var i=0).
//• the conditional test clause (i <= 9).
//• the update clause (i = i + 1).

//➜ 38... A function is generally a named section of code that can be “called” by name, and the code inside it will be run each time.
function printAmount() {
  console.log(amount.toFixed(2));
}
var amount = 99.99;
printAmount(); // "99.99"

amount = amount * 2;
printAmount(); // "199.98"

//➜ 39... Functions can optionally take arguments (aka parameters)—values you pass in. And they can also optionally return a value back

function printAmount(amt) {
  console.log(amt.toFixed(2));
}
function formatAmount() {
  return '$' + amount.toFixed(2);
}
var amount = 99.99;
printAmount(amount * 2); // "199.98"

amount = formatAmount();
console.log(amount); // "$99.99"

//➜ 40... In JavaScript, each function gets its own scope. Scope is basically a collection of variables as well as the rules for how those
//➜       variables are accessed by name. "scope (technically called lexical scope)."
//• Only code inside that function can access that function’s scoped variables.

//➜ 41... A variable name has to be unique within the same scope—there can’t be two different a variables sitting right next to each other.
//➜       But the same variable name a could appear in different scopes.

function one() {
  // this `a` only belongs to the `one()` function
  var a = 1;
  console.log(a);
}
function two() {
  // this `a` only belongs to the `two()` function
  var a = 2;
  console.log(a);
}
one(); // 1
two(); // 2

//➜ 42... Also, a scope can be nested inside another scope, If one scope is nested inside another, code inside the innermost scope
//➜       can access variables from either scope.
//✱  Consider: .
function outer() {
  var a = 1;
  function inner() {
    var b = 2;
    // we can access both `a` and `b` here
    console.log(a + b); // 3
  }
  inner();
  // we can only access `a` here
  console.log(a); // 1
}
outer();

//»  Note:  Lexical scope rules say that code in one scope can access variables of either that scope or any scope outside of it.
//»  Note:  So, code inside the inner() function has access to both variables a
//»         and b, but code only in outer() has access only to a—it cannot
//»         access b because that variable is only inside inner().
