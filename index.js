

const store = {

    questions: [
      {
        question: 'Which of these soccer teams plays in the English Premiere League?',
        answers: [
          'westham united',
          'leeds united',
          'nottingham forrest',
          'london united'
        ],
        correctAnswer: 'westham united'
      },
      {
        question: 'Who is the all-time leading scorer in the English Premiere League',
        answers: [
          'wayne rooney',
          'alan shearer',
          'robbie fowler',
          'lionel messi'
        ],
        correctAnswer: 'alan shearer'
      },
      {
        question: 'who won the 2015-2016 English Premiere League Title',
        answers: [
          'Manchester united',
          'arsenal',
          'leicester city',
          'liverpool'
        ],
        correctAnswer: 'leicester city'
      },
      {
        question: 'What player had the most goals in professional soccer history?',
        answers: [
          'Pele',
          'Maradonna',
          'Ronaldo',
          'Josef Bican'
        ],
        correctAnswer: 'Josef Bican'
      },
      {
        question: 'Which soccer star is married to Posh Spice?',
        answers: [
          'Cristiano Ronaldo',
          'Zlatan Ibrahimovic',
          'David Beckham',
          'Manuel Neuer'
        ],
        correctAnswer: 'David Beckham'
      }
    ],
    startQuiz: false,
    questionNumber: 0,
    possibleCorrect: 0,
    score: 0
  };

// this adds a start quiz button to the begining of our quiz
  function createQuizButton(){
      return '<button class="quizStartButton" type="button">Start Quiz</button>'
  }; 

 // this generates the answer choices
  function generateQuestion(){
    const newObj= store.questions[store.questionNumber]

      return `<form> <h2> ${newObj.question} </h2> <div> <input type="radio" name="soccer"
       value="${newObj.answers[0]}"> ${newObj.answers[0]} </div> <div> <input type="radio" name="soccer" value="${newObj.answers[3]}"> ${newObj.answers[3]} </div> 
       <div> <input type="radio" name="soccer" value="${newObj.answers[1]}"> ${newObj.answers[1]}  </div>
        <div> <input type="radio" name="soccer" value="${newObj.answers[2]}"> ${newObj.answers[2]} </div> 
        <div> <input class="subButton" type="submit" value="submit"> </div> </form>`
  };

function handleStartButtonClick(){
  $('main').on('click', '.quizStartButton', function(event) {
    store.startQuiz = true;
    render()
  })
}


function handleSubmitButton(){
  $('main').on('click', '.subButton', function(event){
    event.preventDefault();
    const newObj= store.questions[store.questionNumber];
    let creditedResponse = newObj.correctAnswer;
    let userVal = $('input:checked').val();

    if(userVal === creditedResponse) {
      store.possibleCorrect++;
      store.score++;
      $('main').html(`<h2> YOU PICKED THE CORRECT ANSWER! </h2>
      <h3>Your score: ${store.score} / ${store.possibleCorrect}</h3> <div> <input class="nextQuestion" type="button" value="Next Question"> </div>`)
    } else if(userVal !== creditedResponse) {
      store.possibleCorrect++;
      $('main').html(`<h2> YOU PICKED THE WRONG ANSWER DUMBASS! </h2>
      <h3>Your score: ${store.score} / ${store.possibleCorrect}</h3> <div> <input class="nextQuestion" type="button" value="Next Question"> </div>`)
    }
  })
};



function nextQuestionButton(){
  $('main').on('click', '.nextQuestion', function(event){
    store.questionNumber++;
    render()
  })
}


  function render(){
    let html = '';

    if (store.startQuiz === false) {
      $('main').html(createQuizButton())
     } else if(store.startQuiz === true) {
        $('main').html(generateQuestion())
    }
  };




  function handleQuestionApp(){
     render()
     createQuizButton()
     generateQuestion()
     handleStartButtonClick()
     handleSubmitButton()
     nextQuestionButton()
  }

  $(handleQuestionApp)



// 1) the starting screen should have a button that users can click to start the quiz.

// 2) Users should be prompted through a series of at least 5 multiple choice questions that they can answer.

// 3) Users should be asked questions 1 after the other.

// 4) Users should only be prompted with 1 question at a time.

// 5) Users should not be able to skip questions.

// 6) Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").

// 7) Upon submitting an answer, users should:
// receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
// be moved onto the next question (or interact with an element to move on).

// 8) Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.

// 9) Users should be able to start a new quiz.


// generate html

// answers array into  store.questions?

// answers for each create a div 

// template generation functions**