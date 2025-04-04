/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */



/* main controls the program. Calling askquestions() it provides feedback depending on the 
 * number wrong returned: 0 = "Perfect!" otherwise it says how many right out of the number asked.
 * set the number of questions as the variable questions.
 * @param none
 * @return none
 */
function main() {
let questions = 5;
askquestions(questions);

}

/* askFive calls askQuestion() question times, sending the question number as an argument. 
 * It counts number wrong returned, and return number wrong to main().
 * @param: none
 * @return: score (0-questions)
 */
function askquestions(questions) {
let right = 0;
for  (question = 1; question <= questions; question++) {
    right += askQuestion(question);
    alert("you answered " + right + " questions correctly")
}
alert("you got " + right + " out of " + questions + " correct.");
return false;
}

/* askQuestion asks a multiplication question, using the quesiton parameter to say which
 * question is being asked.  It returns 0 if incorrect, 1 if correct.
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
function askQuestion(question){
  let a = Math.floor(Math.random()*(9-3)+1)+1
  let b = Math.floor(Math.random()*(9-3)+1)+1
  let product = a*b
let equation = "question" + question + ": " + a + " * "+ b + " =?";
let answer = prompt(equation)
if (answer == product) {
  alert("correct!");
      return true;
    }
    else{ 
      alert("incorrect!");
      return false;
}
}