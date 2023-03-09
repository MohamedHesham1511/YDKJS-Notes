//➜ 1... despite the fact that Java‐Script falls under the general category of “dynamic” or “interpreted” languages,
//➜      it is in fact a compiled language.
//• For JavaScript, the compilation that occurs happens, in many cases, mere microseconds (or less!) before the code is executed.

//➜ 2... In traditional compiled-language process, a chunk of source code, your program,
//➜      will undergo typically three steps before it is executed, roughly called “compilation”:
//• 1. Tokenizing/Lexing: Breaking up a string of characters into meaningful (to the language) chunks, called tokens.
//• 2. Parsing: taking a stream (array) of tokens and turning it into a tree of nested elements “AST” (abstract syntax tree).
//• 3. Code-Generation: The process of taking an AST and turning it into executable code.

//➜ 3... The JavaScript engine is vastly more complex than just those three steps:
//• In the process of parsing and code-generation, there are certainly steps to
//• optimize the performance of the execution, including collapsing redundant elements, etc.

//➜ 4... In Javascript we have:
//• 1. Engine: Responsible for start-to-finish compilation and execution of our JavaScript program.
//• 2. Compiler: One of Engine’s friends; handles all the dirty work of parsing and code-generation.
//• 3. Scope: collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of
//•           rules as to how these are accessible to currently executing code.

//✱   Example: .
var a = 2;
//»  Note:  Compiler declares a variable (if not previously declared) in the current Scope,
//»         and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.

//➜ 5... we have two kinds of look-ups:
//• 1. LHS look-up: means is trying to find the variable container itself, so that it can assign.
//• 2. RHS look-up: means “retrieve his/her source (value),” implying that RHS means “go get the value of…”

//✱   Example: .
console.log(a);
//»  Note:  The reference to a is an RHS reference, because nothing is being assigned to a here.
//»         Instead, we’re looking up to retrieve the value of a, so that the value can be passed to console.log(..).

//✱   Example: .
a = 2;
//»  Note:  The reference to a here is an LHS reference, because we don’t actually
//»         care what the current value is, we simply want to find the variable as a target for the = 2 assignment operation.

//➜ 6... Nested Scope:
//•  if a variable cannot be found in the immediate scope, Engine consults the next outercontaining scope,
//•  continuing until is found or until the outermost (global) scope has been reached.

//»  Note:  The simple rules for traversing nested scope: Engine starts at the currently
//»         executing scope, looks for the variable there, then if not found,
//»         keeps going up one level, and so on. If the outermost global scope is reached,
//»         the search stops, whether it finds the variable or not.

//➜ 7... If an RHS look-up fails to ever find a variable, anywhere in the nested scopes,
//➜      this results in a ReferenceError being thrown by the engine.
//➜      It’s important to note that the error is of the type ReferenceError.

//➜ 8... if the engine is performing an LHS look-up, and it arrives
//➜      at the top floor (global scope) without finding it, if the program is not
//➜      running in “Strict Mode” then the global scope will create a new variable
//➜      of that name in the global scope, and hand it back to Engine.

//➜ 9... “Strict Mode,” which was added in ES5: disallows the automatic/implicit global variable creation.
//• In that case, there would be no global scoped variable to hand back from an LHS look-up,
//• and Engine would throw a ReferenceError similarly to the RHS case.

//➜ 10... if a variable is found for an RHS look-up, but you try to do something with its value that is impossible,
//➜ such as trying to execute as-function a nonfunction value, or reference a property on a null or
//➜ undefined value, then Engine throws a different kind of error, called a TypeError.
//• ReferenceError is scope resolution-failure related, whereas TypeError implies that scope resolution was successful,
//• but that there was an illegal/impossible action attempted against the result.

//»  Note:   Unfulfilled RHS references result in ReferenceErrors being thrown.
//»  Note:   Unfulfilled LHS references result in an automatic, implicitly created
//»          global of that name (if not in Strict Mode), or a ReferenceError (if in Strict Mode).
