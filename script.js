// Quiz data
const quizData = [
    {
      question: "What is the capital city of France?",
      options: ["Paris", "Madrid", "Berlin"],
      answer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter"],
      answer: 0
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
      answer: 0
    },
    {
      question: "Which country is famous for its pyramids?",
      options:["China","Egypt","Italy"," Greece"],
      answer: 1
    },
    {
      question: "Which country is home to the famous Taj Mahal?",
      options: ["India","China","Greece","Italy"],
      answer: 0 
    }
    
  ];
  
  // Initialize quiz
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const question = quizData[currentQuestion];
    quizContainer.innerHTML = `
      <div class="question">${question.question}</div>
      <div class="options">
        ${question.options
          .map(
            (option, index) =>
              `<input type="radio" name="option" value="${index}">${option}<br>`
          )
          .join("")}
      </div>
    `;
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );
    if (selectedOption) {
      const answer = parseInt(selectedOption.value);
      if (answer === quizData[currentQuestion].answer) {
        score++;
      }
      selectedOption.checked = false;
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
  }
  
  function showResult() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length} questions.`;
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  // Start the quiz
  loadQuestion();
  