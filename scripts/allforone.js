var params = document.body.getElementsByTagName('script');
query = params[0].classList;
var correctAnswer = query[0];
var next_page = query[1];

function selectAnswer(answerValue, answerText) {
    console.log("You selected option:", answerValue);
    console.log("Which corresponds to:", answerText);
    
    // Check if the selected answer matches the correct answer
    if (answerValue === correctAnswer) {
      console.log("Correct! The capital of France is Paris.");
      window.location.href = '../pages/' + next_page + ".html";
    } else {
      console.log("Incorrect. Try again.");
      window.location.href = "../index.html";
    }
}