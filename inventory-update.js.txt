function sortByName(a,b){
console.log("comparing " + a[1] + " to " + b[1]);
return a[1].localeCompare(b[1])    
console.log(a[1] + " comes first");

};


//Takes curInv as arr1
function updateInventory(arr1, arr2) {
    let curItems = [];
    let output = arr1;
    for (let i = 0; i< arr1.length; i++){
        curItems.push(arr1[i][1]);
    }
    
    console.log(curItems);
    for (let i = 0; i < arr2.length; i++){
        let targetItem = arr2[i][1];
        if(curItems.includes(targetItem)){
            console.log( "Updating " + targetItem);
            let insertPoint = curItems.indexOf(targetItem);
            //Increase quantity
            output[insertPoint][0] = arr1[insertPoint][0] + arr2[i][0];

            
            }
            else{
                console.log("Did not find " + targetItem +", adding");
                output.push(arr2[i]);
            }
    }
    


    console.log(output);
    output.sort(sortByName);
    console.log(output);
    return output;
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);