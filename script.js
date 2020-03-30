//Timer

// Add event listener to generate button

document.getElementById('timer').innerHTML =
  003 + ":" + 20;


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m = m - 1 }
  if (m < 0) { alert('Quiz Time Expired.') }

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec };
  if (sec < 0) { sec = "59" };
  return sec;
}


// Questions in an array of objects
var quizQuestions = [
  {
    title: "What is the oldest known living tree on earth",
    choices: ["Coastal Redwood", "Red Cedar", "Bristlecone Pine", "Queen Palm"],
    answer: "Bristlecone Pine"
  },
  {
    title: "What is the capital of The EU?",
    choices: ["Zagreb", "Paris", "Brussles", "Berlin"],
    answer: "Brussles"
  },
  ];

