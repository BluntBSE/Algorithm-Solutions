//Find the symmetric difference between an arbitrary number of arrays.

//Function to check between two arrays.
function findDifference(arr1,arr2){
 let output = []; 
 console.log("Arr1 is");
 console.log(arr1);

  arr1.forEach(function(item){
    if(arr2.indexOf(item)<0 && output.indexOf(item)<0){
      output.push(item);
  
    }

    arr2.forEach(function(item){
      if(arr1.indexOf(item)<0 && output.indexOf(item)<0){
        output.push(item);
      }

    })

  })

  return output;
};

//Apply findDifference to each argument

function sym() {
  let args = Array.prototype.slice.call(arguments)
  console.log(args)
  let output = args.reduce(findDifference);

  return output;
}

/*Test with:
sym([1, 2, 3], [5, 2, 1, 4]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
*/