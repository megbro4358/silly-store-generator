//starter vars:
//enter custom name text feild
const customName = document.getElementById('customname');
//generate random story button
const randomize = document.querySelector('.randomize');
//element the story will be copied into
const story = document.querySelector('.story');

//starter function
//takes an array and returns one of the items stored inside the array at random
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//more vars
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const  insertY = ["the soup kitchen", "Disneyland", "the White House"];
const  insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

//adds a click event listener to the randomize var so when the button it represents
//is clicked the result() function is run
randomize.addEventListener('click', result);

//partially completed result() function definition
//
function result() {

  //this is needed to create a new random story each time the button 
  //is pressed and the function is run
  let newStory = storyText;
  //new item vars
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  //use replace to create a new story
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);


  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*(.0714286)) + ' stone';
    let temperature =  Math.round((5/9)*(94-32)) + ' celcius';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}