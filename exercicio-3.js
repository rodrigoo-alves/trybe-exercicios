
function positive(val1) {
  if (val1 === true) { 
    return 'positive';
  } else if (val1 === false) {
   return 'negative';
  }
  return 'zero';
}

console.log(positive(true));
