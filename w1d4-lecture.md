# W1D4 Lecture

* What is CALL BACK?

- Functions are values
- What are anonymous functions?
- Function declaration vs. Function expression
- Function calling vs. passing (reference)


// Functions are JUST VALUES
// Like...numbers? or Obj.? YES.
// Functions are special values that can be INVOKED --- CALLED

```js
function goToKitchen(functionAsValue){
  functionAsValue();
}

function myFunction(){
  //function do stuff...
}



goToKitchen(myFunction);
goToKitchen(someFunctions);

```

* ForEachLoop

```js
var name =  ['Simon', 'Pierre', 'Brenda', 'Hamid'];

for( var i = 0; i < names.length; i++){
  var name = names[i];

  console.log(`Hey ${name}`);
}
