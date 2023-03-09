//➜ 1... As we asserted, JavaScript has typed values, not typed variables. The following built-in types are available:
//• string
//• number
//• boolean
//• null and undefined
//• object
//• symbol (new to ES6)

//➜ 2... JavaScript provides a typeof operator that can examine a value and tell you what type it is:

var a;
typeof a; // "undefined"

a = 'hello world';
typeof a; // "string"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object"--weird, bug

a = undefined;
typeof a; // "undefined"

a = { b: 'c' };
typeof a; // "object"

//»  Note:  The return value from the typeof operator is always one of six (seven as of ES6!) string values.
//» That is, typeof "abc" returns "string", not string.

//-!  warning:  typeof null is an interesting case because it errantly returns "object" when you’d expect it to return "null".

//➜ 3... The object type refers to a compound value where you can set properties
//➜      (named locations) that each hold their own values of any type.
//• This is perhaps one of the most useful value types in all of Java‐Script.

var obj = {
  a: 'hello world',
  b: 42,
  c: true,
};

//dot notation
obj.a; // "hello world"
obj.b; // 42
obj.c; // true

//bracket notation
obj['a']; // "hello world"
obj['b']; // 42
obj['c']; // true

//»  Note:  Dot notation is shorter and generally easier to read, and is thus preferred when possible.
//»  Note:  Bracket notation is useful if you have a property name that has special characters in it, like obj["hello world!"].
//»  Note:  The [ ] notation requires either a variable or a string literal (which needs to be wrapped in " .. " or ' .. ').

//➜ 4... Of course, bracket notation is also useful if you want to access a property/key but the name is stored in another variable.
//✱ such as:
var obj = {
  a: 'hello world',
  b: 42,
};

var b = 'a';

obj[b]; // "hello world"
obj['b']; // 42

//➜ 5... There are a couple of other value types that you will commonly interact with in JavaScript programs: array and function.
//• But rather than being proper built-in types, these should be thought of more like subtypes—specialized versions of the object type.

//➜ 6... An array is an object that holds values (of any type) not particularly in named properties/keys,
//➜ but rather in numerically indexed positions.

var arr = ['hello world', 42, true];
arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true

arr.length; // 3
typeof arr; // "object"

//➜ 7... The best and most natural approach is to use arrays for numerically positioned values and use objects for named properties.

//➜ 8... The other object subtype you’ll use all over your JS programs is a function:

function foo() {
  return 42;
}
foo.bar = 'hello world';
typeof foo; // "function"
typeof foo(); // "number"
typeof foo.bar; // "string"

//»  Note:   Again, functions are a subtype of objects — typeof returns "function",
//»          which implies that a function is a main type—and can thus have properties,
//»          but you typically will only use function object properties (like foo.bar) in limited cases.

//➜ 9... The built-in types and subtypes we’ve just discussed have behaviors exposed as properties and methods that are quite powerful and useful.
//✱ For  Example: .

var a = 'hello world';
var b = 3.14159;
a.length; // 11
a.toUpperCase(); // "HELLO WORLD"
b.toFixed(4); // "3.1416"

//»  Note:  The “how” behind being able to call a.toUpperCase() is more complicated than just that method existing on the value.

//»  Note:  Briefly, there is a String (capital S) object wrapper form,
//»         typically called a “native,” that pairs with the primitive string type;
//»         it’s this object wrapper that defines the toUpperCase() method on its prototype.

//»  Note:  When you use a primitive value like "hello world" as an object by
//»        referencing a property or method (e.g., a.toUpperCase() in the previous snippet),
//»        JS automatically “boxes” the value to its object wrapper counterpart (hidden under the covers).

//»  Note:  A string value can be wrapped by a String object, a number can be
//»         wrapped by a Number object, and a boolean can be wrapped by a
//»         Boolean object. For the most part, you don’t need to worry about or
//»         directly use these object wrapper forms of the values—prefer the
//»         primitive value forms in practically all cases and JavaScript will take care of the rest for you.

//➜ 10... There are two main types of value comparison that you will need to make in your JS programs: equality and inequality.
//• The result of any comparison is a strictly boolean value (true or false), regardless of what value types are compared.

//➜ 11... Coercion comes in two forms in JavaScript: explicit and implicit.
//✱ Here’s an example of explicit coercion:

var a = '42';
var b = Number(a);
a; // "42"
b; // 42--the number!

//✱  And here’s an example of implicit coercion:
var a = '42';
var b = a * 1; // "42" implicitly coerced to 42 here
a; // "42"
b; // 42--the number!

//➜ 12... The specific list of “falsy” values in JavaScript is as follows:
//• "" (empty string)
//• 0, -0, NaN (invalid number)
//• null, undefined
//• false

//»  Note:  Any value that’s not on this “falsy” list is “truthy.” Here are some examples of those:

//• "hello"
//• 42
//• true
//• [ ], [ 1, "2", 3 ] (arrays)
//• { }, { a: 42 } (objects)
//• function foo() { .. } (functions)

//➜ 13... There are four equality operators: ==, ===, !=, and !==.

//➜ 14... The proper way to characterize them is that == checks for value equality with coercion allowed, and ===
//➜       checks for value equality without allowing coercion; === is often called “strict equality” for this reason.
//✱  Consider:  .
var a = '42';
var b = 42;
a == b; // true
a === b; // false

//»  Note:  "42" becomes 42, to make the comparison 42 == 42.

//➜ 15... To boil down a whole lot of details to a few simple takeaways, and help you know whether to use == or === in various situations,
//➜       here are my simple rules:
//• If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
//• If either value in a comparison could be of these specific values (0, "", or []—empty array), avoid == and use ===.
//• In all other cases, you’re safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

//»  Note:  If you can be certain about the values, and == is safe, use it! If you can’t be certain about the values,
//»         use ===. It’s that simple.

//➜ 16... The != non-equality form pairs with ==, and the !== form pairs with ===.
//•  All the rules and observations we just discussed hold symmetrically for these non-equality comparisons.

//➜ 17... You should take special note of the == and === comparison rules if you’re comparing two non-primitive values,
//➜       like objects (including function and array). Because those values are actually held by reference,
//➜       both == and === comparisons will simply check whether the references match, not anything about the underlying values.
//• For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between.
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = '1,2,3';
a == c; // true
b == c; // true
a == b; // false

//➜ 18... The <, >, <=, and >= operators are used for inequality, referred to in the specification as “relational comparison.”
//• Typically they will be used with ordinally comparable values like numbers. It’s easy to understand that 3 < 4.
//»  Note:  But JavaScript string values can also be compared for inequality, using typical alphabetic rules ("bar" < "foo").
//»  Note:  there are no “strict inequality” operators that would disallow coercion the same way === “strict equality” does.

//✱  Consider:  .
var a = 41;
var b = '42';
var c = '43';
a < b; // true
b < c; // true

//»  Note:   ES5 specification, says that if both values in the < comparison are strings, as it is with b < c,
//»          the comparison is made lexicographically (aka alphabetically like a dictionary).
//»          But if one or both is not a string, as it is with a < b, then both values are coerced to be numbers,
//»          and a typical numeriؤ comparison occurs.

//➜ 19... The biggest gotcha you may run into here with comparisons between potentially different value types—remember,
//➜       there are no “strict inequality” forms to use—is when one of the values cannot be made into a valid number, such as:

var a = 42;
var b = 'foo';
a < b; // false
a > b; // false
a == b; // false

//»  Note:   the b value is being coerced to the “invalid number value” NaN in the < and > comparisons,
//»          and the specification says that NaN is neither greater than nor less than any other value.

//»  Note:   The == comparison fails for a different reason. a == b could fail if
//»          it’s interpreted either as 42 == NaN or "42" == "foo"—as we explained earlier, the former is the case.

//➜ 20... In JavaScript, variable names (including function names) must be valid identifiers.
//• An identifier must start with a-z, A-Z, $, or _. It can then contain any of those characters plus the numerals 0-9.
//»  Note:  Generally, the same rules apply to a property name as to a variable identifier.
//»  Note:  However, certain words cannot be used as variables, but are OK as property names.
//»         These words are called “reserved words,” and include the JS keywords (for, in, if, etc.) as well as null, true, and false.

//➜ 21... Wherever a var appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout.
//• Metaphorically, this behavior is called hoisting.
//✱  Consider: .
var a = 2;
foo(); // works because `foo()`
// declaration is "hoisted"
function foo() {
  a = 3;
  console.log(a); // 3
  var a; // declaration is "hoisted"
  // to the top of `foo()`
}
console.log(a); // 2

//➜ 22... When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes. For example:
function foo() {
  var a = 1;
  function bar() {
    var b = 2;
    function baz() {
      var c = 3;
      console.log(a, b, c); // 1 2 3
    }
    baz();
    console.log(a, b); // 1 2
  }
  bar();
  console.log(a); // 1
}
foo();

//-!  warning:   If you try to access a variable’s value in a scope where it’s not available, you’ll get a ReferenceError thrown.
//-!  warning:   If you try to set a variable that hasn’t been declared, you’ll either end up creating a variable
//-!             in the top-level global scope (bad!) or getting an error, depending on “strict mode”.
function foo() {
  a = 1; // `a` not formally declared
}
foo();
a; // 1--oops, auto global variable :(

//➜ 23... ES6 lets you declare variables to belong to individual blocks (pairs of { .. }), using the let keyword.
function foo() {
  var a = 1;
  if (a >= 1) {
    let b = 2;
    while (b < 5) {
      let c = b * 2;
      b++;
      console.log(a + c);
    }
  }
}
foo();
// 5 7 9

//»  Note:   Because of using let instead of var, b will belong only to the if statement and thus not to the whole foo() function’s scope.

//➜ 24... In addition to the if statement, JavaScript provides a few other conditionals mechanisms that we should take a look at.
//• Sometimes you may find yourself writing a series of if..else..if statements like this:
if (a == 2) {
  // do something
} else if (a == 10) {
  // do another thing
} else if (a == 42) {
  // do yet another thing
} else {
  // fallback to here
}
//• Here’s another option, the switch statement:
switch (a) {
  case 2:
    // do something
    break;
  case 10:
    // do another thing
    break;
  case 42:
    // do yet another thing
    break;
  default:
  // fallback to here
}

//»  Note:  If you omit break from a case, and that case matches or runs,
//»       execution will continue with the next case’s statements regardless of that case matching.
//»  Note:  This so called “fall through” is sometimes useful/desired:
switch (a) {
  case 2:
  case 10:
    // some cool stuff
    break;
  case 42:
    // other stuff
    break;
  default:
  // fallback
}

//➜ 25... Another form of conditional in JavaScript is the “conditional operator,” often called the “ternary operator.”
//• It’s like a more concise form of a single if..else statement, such as:
var a = 42;
var b = a > 41 ? 'hello' : 'world';

// similar to:

if (a > 41) {
  b = 'hello';
} else {
  b = 'world';
}

//»  Note:  The conditional operator doesn’t have to be used in an assignment, but that’s definitely the most common usage.

//➜ 26... ES5 added a “strict mode” to the language.
//• tightens the rules for certain behaviors.
//• these restrictions are seen as keeping the code to a safer and more appropriate set of guidelines.
//• Also, adhering to strict mode makes your code generally more optimizable by the engine.
//• Strict mode is a big win for code, and you should use it for all your programs.

//➜ 27... You can opt in to strict mode for an individual function, or an entire file, depending on where you put the strict mode pragma:
//✱  Consider: .
function foo() {
  'use strict';
  // this code is strict mode
  function bar() {
    // this code is strict mode
  }
}
// this code is not strict mode

//Compare that to:
('use strict');
function foo() {
  // this code is strict mode
  function bar() {
    // this code is strict mode
  }
}
// this code is strict mode

//»  Note:  One key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration from omitting the var:

function foo() {
  'use strict'; // turn on strict mode
  a = 1; // `var` missing, ReferenceError
}
foo();

//➜ 28... You recall typical function declaration syntax as follows:
function foo() {
  // ..
}
//• Though it may not seem obvious from that syntax,
//• foo is basically just a variable in the outer enclosing scope that’s given a reference to the function being declared.

//»  Note:  Not only can you pass a value (argument) to a function, but a function itself can be a value
//»         that’s assigned to variables or passed to or returned from other functions.
//✱  Consider: .
var foo = function () {
  // ..
};
//Named function expressions.
var x = function bar() {
  // ..
};

//• The first function expression assigned to the foo variable is called anonymous because it has no name.
//• The second function expression is named (bar), even as a reference to it is also assigned to the x variable.

//➜ 29... Immediately Invoked Function Expressions (IIFEs)
//•  There’s another way to execute a function expression, which is typically referred to as an immediately invoked function expression (IIFE):
(function IIFE() {
  console.log('Hello!');
})();
// "Hello!"

//»  Note:  The outer ( .. ) that surrounds the (function IIFE(){ .. }) function expression is just a nuance of JS grammar needed to prevent
//»         it from being treated as a normal function declaration.

//»  Note:  The final () on the end of the expression—the })(); line—is
//»         what actually executes the function expression referenced immediately before it.

//✱  Consider: .
function foo() {}
// `foo` function reference expression,
// then `()` executes it
foo();
// `IIFE` function expression,
// then `()` executes it
(function IIFE() {})();

//»  Note:   As you can see, listing the (function IIFE(){ .. }) before its executing ()
//»          is essentially the same as including foo before its executing ();

//»  Note:   using an IIFE in this fashion is often used to declare variables that won’t affect the surrounding code outside the IIFE:
var a = 42;
(function IIFE() {
  var a = 10;
  console.log(a); // 10
})();
console.log(a); // 42

//IIFEs can also have return values:
var x = (function IIFE() {
  return 42;
})();
x; // 42

//➜ 30... Closure: one of the most important techniques in your JS skillset.
//•  You can think of closure as a way to “remember” and continue to access
//•  a function’s scope (its variables) even once the function has finished running.
//✱  Consider: .
function makeAdder(x) {
  // parameter `x` is an inner variable
  // inner function `add()` uses `x`, so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  }
  return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder(1);
// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder(10);
plusOne(3); // 4 <-- 1 + 3
plusOne(41); // 42 <-- 1 + 41
plusTen(13); // 23 <-- 10 + 13

//»  Note:   The reference to the inner add(..) function that gets returned with
//»          each call to the outer makeAdder(..) is able to remember whatever x value was passed in to makeAdder(..).

//➜ 31... The most common usage of closure in JavaScript is the module pattern.
//• Modules let you define private implementation details (variables,functions)
//• that are hidden from the outside world, as well as a public API that is accessible from the outside.
//✱  Consider: .
function User() {
  var username, password;
  function doLogin(user, pw) {
    username = user;
    password = pw;
    // do the rest of the login work
  }
  var publicAPI = {
    login: doLogin,
  };
  return publicAPI;
}
// create a `User` module instance
var fred = User();
fred.login('fred', '12Battery34!');

//»  Note:   The User() function serves as an outer scope that holds the variables
//»          username and password, as well as the inner doLogin() function;
//»          these are all private inner details of this User module that cannot be accessed from the outside world.

//➜ 32... If a function has a this reference inside it, that this reference usually points to an object.
//•  But which object it points to depends on how the function was called.

//-!  warning:  It’s important to realize that this does not refer to the function itself, as is the most common misconception.

function foo() {
  console.log(this.bar);
}

var bar = 'global';

var obj1 = {
  bar: 'obj1',
  foo: foo,
};

var obj2 = {
  bar: 'obj2',
};

// --------
foo(); // "global"
obj1.foo(); // "obj1"
foo.call(obj2); // "obj2"
new foo(); // undefined

//➜ There are four rules for how this gets set, and they’re shown in those last four lines of that snippet:
//• 1. foo() ends up setting this to the global object in non-strict mode—in strict mode, this would be undefined and you’d get
//•    an error in accessing the bar property—so "global" is the value found for this.bar.
//• 2. obj1.foo() sets this to the obj1 object.
//• 3. foo.call(obj2) sets this to the obj2 object.
//• 4. new foo() sets this to a brand new empty object.

//»  Note:   Bottom line: to understand what this points to, you have to examine
//»          how the function in question was called. It will be one of those
//»          four ways just shown, and that will then answer what this is.

//➜ 33... When you reference a property on an object, if that property doesn’t
//➜       exist, JavaScript will automatically use that object’s internal prototype
//➜       reference to find another object to look for the property on.
//• The internal prototype reference linkage from one object to its fallback happens at the time the object is created.
//• The simplest way to illustrate it is with a built-in utility called Object.create(..).

//✱  Consider: .
var foo = {
  a: 42,
};
// create `bar` and link it to `foo`
var bar = Object.create(foo);
bar.b = 'hello world';
bar.b; // "hello world"
bar.a; // 42 <-- delegated to `foo`

//»  Note:   The a property doesn’t actually exist on the bar object, but because
//»          bar is prototype-linked to foo, JavaScript automatically falls back to
//»          looking for a on the foo object, where it’s found.

//➜ 34... There are two main techniques you can use to “bring” the newer JavaScript stuff to the older browsers: polyfilling and transpiling.

//➜ 35... The word “polyfill” is an invented term (by Remy Sharp) used to
//➜       refer to taking the definition of a newer feature and producing a
//➜       piece of code that’s equivalent to the behavior, but is able to run in older JS environments.

//✱  Consider: .
if (!Number.isNaN) {
  Number.isNaN = function isNaN(x) {
    return x !== x;
  };
}

//»  Note:   The if statement guards against applying the polyfill definition in
//»          ES6 browsers where it will already exist. If it’s not already present, we define Number.isNaN(..).

//»  Note:   Not all new features are fully polyfillable. Sometimes most of the behavior can be polyfilled, but there are still small deviations.
//»  Note:   use an already vetted set of polyfills that you can trust, such as those provided by ES5-Shim and ES6-Shim.

//➜ 36... Transpiling:
//•  1. There’s no way to polyfill new syntax that has been added to the language.
//•  2. So the better option is to use a tool that converts your newer code into older code equivalents.
//•  3. This process is commonly called “transpiling,” a term for transforming + compiling.
//•  4. Essentially, your source code is authored in the new syntax form,
//•     but what you deploy to the browser is the transpiled code in old syntax form.
//•  5. You typically insert the transpiler into your build process, similar to your code linter or your minifier.

//➜ 37... There are several important reasons you should care about transpiling:
//•  1. make your code more readable and maintainable.
//•  2. you get to take advantage of browser performance optimizations with the new syntax.

//➜ 38... Here’s a quick example of transpiling. ES6 adds a feature called “default parameter values.” It looks like this:
function foo(a = 2) {
  console.log(a);
}
foo(); // 2
foo(42); // 42
//• what will a transpiler do with that code to make it run in older environments?
function foo() {
  var a = arguments[0] !== void 0 ? arguments[0] : 2;
  console.log(a);
}
//»  Note:   As you can see, it checks to see if the arguments[0] value is void 0 or undefined,
//»         and if so provides the 2 default value; otherwise, it assigns whatever was passed.

//➜ 39... There are quite a few great transpilers for you to choose from. Here are some good options at the time of this writing:
//• Babel (formerly 6to5) Transpiles ES6+ into ES5
//• Traceur Transpiles ES6, ES7, and beyond into ES5

//➜ 40... The most common non-JavaScript JavaScript you’ll encounter is the DOM API. For example:
var el = document.getElementByID('foo');
//• 1. The document variable exists as a global variable when your code is running in a browser.
//• 2. It’s not provided by the JS engine, nor is it particularly controlled by the JavaScript specification.
//• 3. It’s a special object, often called a “host object.”

//➜ 41... the DOM and its behavior is implemented in something more like C/C++.
//•  alert(..) pops up a message box in the user’s browser window.
//•  alert(..) is provided to your JS program by the browser, not by the JS engine itself.
//•  The same goes with console.log(..); your browser provides such mechanisms and hooks them up to the developer tools.
