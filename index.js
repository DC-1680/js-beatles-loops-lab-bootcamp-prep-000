function theBeatlesPlay(musicians, instruments){
  var info = [];

  for (var i = 0; i < musicians.length; i++){
    if (var i = 0){
      info.push(musicians[i] + "John Lennon plays guitar.")
    }
  }


  return ;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  
function johnLennonFacts(facts){
  counter = facts.length-1; 
  var newFacts = []; 
  
  while(counter >= 0){
    newFacts += (facts[counter] + "!!!"); 
    counter--; 
  }
  return newFacts; 
}

/*+ Create a function `iLoveTheBeatles` which accepts a number as a parameter. The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds `"I love the Beatles!"` to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than `15`. The function should return the array with the strings `"I love the Beatles!"`.*/

function iLoveTheBeatles(num){
  var iLoveArr = [];
  var phrase = "I love the Beatles!"
  do {
    iLoveArr.push(phrase);
    num++; 
  } while (num < 15); 
  return iLoveArr; 
}