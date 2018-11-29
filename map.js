var words = ["ground", "control", "to", "major", "tom"];

function map(words, transformer){
  var arr = [];
  words.forEach(function(word){
    var newValue = transformer(word);
    arr.push(newValue);
  })
  return arr;
}

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));

