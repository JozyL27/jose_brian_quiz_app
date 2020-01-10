

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
          $('main').html('<form><input type="radio" name="gender" value="male" checked> Male<br><input type="radio" name="gender" value="female"> Female<br><input type="radio" name="gender" value="nonbinary"> Nonbinary<br><input type="radio" name="gender" value="other"> Other</form>')
      })
  }


  function renderQuestionList(){}


  function handleQuestionApp(){
      addStartQuiz()
      generateQuestionForm()
  }

  $(handleQuestionApp)