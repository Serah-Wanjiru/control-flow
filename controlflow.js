//write a function that accepts an array of strings and console.logs each element using a for loop.
function vein(){
    let me=["ann","jane","caro","sera"]
    for(let s=0; s<=me.length; s++){
    console.log(me[s]);
    }

}
vein()

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

let students = [2,4,6,8,9,6];
students.forEach(myFunction);
function myFunction(item) {
   console.log(item*3);
}

//Write a function that takes in an array of numbers and consoles
  //the first four items multiplied by 8 and the last two added by 5.
  //Console the array with the new values
  let made = [2,4,6,7,8,12];
mytrue(made);
function mytrue(item) {
    for (let i = 0; i < 4; i++) {
      item[i] = item[i] * 8;
    }
    let lasttwo= item.length - 1;
    item[lasttwo] += 5;
    item[lasttwo- 1] += 5;
    console.log(item);
}
// Write a function that takes in the following array and use a while loop to iterate and
//break when the item is equal to the fourth index
let number1 = [1,2,3,4,5,6,7,8,9];
nuMber2(number1);
function nuMber2(array) {
    let i = 0;
    while (i < array.length) {
      if (array[i] === array[4]) {
        break;
      }
      console.log(array[i]);
      i++;
    }
  }
  //Write a function that takes in a an array of strings and use a
  //continue statement when the item is at the second index
let names= ["hello","caro","jane","julie","male"];
mynames(names);
function mynames(array) {
    for (let i = 0; i < array.length; i++) {
      if (i === 2) {
        continue;
      }
      console.log({"continue":array[i]})
    }
  }

