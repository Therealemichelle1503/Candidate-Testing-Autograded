const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = "";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

let answer1 = input.question(questions[0]);
  while (answer1 !== correctAnswers[0]) {
    answer1 = input.question ("\n That is not correct, try again." );
  }

let answer2 = input.question(questions[1]);
  while (answer2 !== correctAnswers[1]) {
    answer2 = input.question ("\nThat is not correct, try again." );
  }

let answer3 = input.question(questions[2]);
  while (answer3 !== correctAnswers[2]) {
    answer3 = input.question ("\nThat is not correct, try again." );
  }

let answer4 = input.question(questions[3]);
  while (answer4 !== correctAnswers[3]) {
    answer4 = input.question ("\nThat is not correct, try again." );
  }

let answer5 = input.question(questions[4]);
  while (answer5 !== correctAnswers[4]) {
    answer5 = input.question ("\nThat is not correct, try again." );
  }


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  console.log(`\nYou said ${answer1} and ${correctAnswers[0]} was correct, nice work!`);
  console.log(`\nYou said ${answer2} and ${correctAnswers[1]} was correct, nicely done!`);
  console.log(`\nYou said ${answer3} and ${correctAnswers[2]} was correct, you are so smart!`);
  console.log(`\nYou said ${answer4} and ${correctAnswers[3]} was correct, fantastic!`);
  console.log(`\nYou said ${answer5} and ${correctAnswers[4]} was correct, you rock!`);



  let grade;  //TODO 3.2 use this variable to calculate the candidates score //
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello," + candidateName, + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};