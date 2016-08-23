var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the
//product of all the numbers via multiplication.


var result = numbers.reduce(function(compiled,current,index){
  console.log("The result of the previous computation "+ compiled, ". The value for the next iteration: "+current, ". The index of the current element: "+index);
  return compiled * current;
})

console.log("The total multiplication results to "+result);
