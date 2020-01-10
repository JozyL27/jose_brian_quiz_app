

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
    questionNumber: 0,
    score: 0
  };


  function addStartQuiz(){
      $('main').append('<button class="quizStartButton" type="button">Start Quiz</button>')
      $('main').prepend(`<h1 class='head'> Soccer Quiz! </h1>`)
  } 

  function getQuestion(){
      
  }

  function generateQuestionForm(){
      $('main').on('click', '.quizStartButton', function() {
          $('main').html('<form> <div> <input type="radio" name="gender value="Ronaldo"> Ronaldo <input type="radio" name="gender" value="female"> Female <input type="radio" name="gender" value="nonbinary"> Nonbinary <input type="radio" name="gender" value="other"> Other<input type="submit" value="submit"> </div> </form>')
      })
  }


  function renderQuestionList(){}


  function handleQuestionApp(){
      addStartQuiz()
      generateQuestionForm()
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