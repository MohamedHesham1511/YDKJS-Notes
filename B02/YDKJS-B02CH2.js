//➜ 1... we defined “scope”: as the set of rules that govern how the engine can look up a variable by its identifier name and find it,
//➜      either in the current scope, or in any of the nested scopes it’s contained within.

//➜ 2... lexical scope, the scope model that JavaScript employs.
//»  Note:  The other model, which is still used by some languages (such as Bash scripting, some modes in Perl, etc) is called dynamic scope.

//➜ 3... lexical scope is scope that is defined at lexing time.
//• In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time,
//• and thus is (mostly) set in stone by the time the lexer processes your code.

//✱   Consider: .
function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}
foo(2); // 2, 4, 12

//• There are three nested scopes inherent in this code example. It may be helpful to think about these scopes as bubbles inside of each other.
//• Bubble 1 encompasses the global scope and has just one identifier in it: foo.
//• Bubble 2 encompasses the scope of foo, which includes the three identifiers: a, bar, and b.
//• Bubble 3 encompasses the scope of bar, and it includes just one identifier: c.
//»  Note:  Scope look-up stops once it finds the first match.

//➜ 4... The same identifier name can be specified at multiple layers of nested scope, which is called “shadowing”
//•  (the inner identifer “shadows” the outer identifier).

//»  Note:  No matter where a function is invoked from, or even how it is invoked,
//»        its lexical scope is only defined by where the function was declared.

//»  Note:  The lexical scope look-up process only applies to first-class identifiers, such as the a, b, and c.
//•  If you had a reference to foo.bar.baz in a piece of code,
//•  the lexical scope look-up would apply to finding the foo identifier,
//•  but once it locates that variable, object property-access rules take over to resolve the bar and baz properties, respectively.

//➜ 5... how could there possibly be a way to “modify” (cheat) lexical scope at runtime?
//• JavaScript has two such mechanisms to cheat/modify lexical scope.
//• 1. eval()
//• 2. with { }

//-!  warning:  cheating lexical scope leads to poorer performance.

//➜ 6... Cheating lexaical scope using eval().
//• The eval(..) function in JavaScript takes a string as an argument and
//• treats the contents of the string as if it had actually been authored code at that point in the program.
//✱   Consider: .
function foo(str, a) {
  eval(str); // cheating!
  console.log(a, b);
}
var b = 2;
foo('var b = 3;', 1); // 1, 3

//»  Note:  When the console.log(..) call occurs, it finds both a and b in the
//»         scope of foo(..), and never finds the outer b. Thus, we print out “1, 3”
//»         instead of “1, 2” as would have normally been the case.

//»  Note:  By default, if a string of code that eval(..) executes contains one or
//»         more declarations (either variables or functions), this action modifies
//»         the existing lexical scope in which the eval(..) resides.

//»  Note:  eval(..) when used in a strict-mode program operates in its own lexical scope,
//»         which means declarations made inside of the eval() do not actually modify the enclosing scope.
//✱   Consider: .
function foo(str) {
  'use strict';
  eval(str);
  console.log(a); // ReferenceError: a is not defined
}
foo('var a = 2');

//➜ 7... Cheating Lexical scope using "with" keyword. "deprecated! feature in Javascript"
//• with is typically explained as a shorthand for making multiple property
//• references against an object without repeating the object reference itself each time.
//✱   Example: .
var obj = {
  a: 1,
  b: 2,
  c: 3,
};
// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;
// "easier" short-hand
with (obj) {
  a = 3;
  b = 4;
  c = 5;
}

//• However, there’s much more going on here than just a convenient shorthand for object property access. Consider:
function foo(obj) {
  with (obj) {
    a = 2;
  }
}
var o1 = {
  a: 3,
};
var o2 = {
  b: 3,
};
foo(o1);
console.log(o1.a); // 2
foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2—Oops, leaked global!

//»  Note:   When we pass in o1, the a = 2 assignment finds the property o1.a
//» and assigns it the value 2, as reflected in the subsequent console.log(o1.a) statement.
//» However, when we pass in o2, since it does not have an a property, no such property is created, and o2.a remains undefined.
