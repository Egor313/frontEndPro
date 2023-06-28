console.log(pow(2, 3)); 
console.log(pow(99, 2)); 
console.log(pow(4, 0)); 
console.log(pow(13, 13)); 


function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }

  return num * pow(num, degree - 1);
}
