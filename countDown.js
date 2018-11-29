var countdownGenerator = function (x) {
  /* your code here */
  var num = x;

  return function(){
    if(num > 0){
      console.log(`T-minus ${num} ...`);
    }else if(num === 0){
      console.log(`Blast Off!`);
    }else{
      console.log(`Rockets already gone, bub!`);
    }
    num -= 1;
    return num;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!