var questions = [
    {
      question: "What is the meaning of Bio?",
      options: ["Life", "Variety", "Unique", "Diploid"],
      answer: "Life"
    },
    {
      question: "What is biodiversity?",
      options: ["The conservation of naturalresources on earth", "The variety of life on earth ranging from genetic diversity, species diversity and ecosystem diversity", "The conservation of uniform spceies only", "Transfering one species to another country"],
      answer: "The variety of life on earth ranging from genetic diversity, species diversity and ecosystem diversity"
    },
    {
      question: "What is the importance of Biodiversity conservation?",
      options: ["To achieve sustainable goals", "To preserve natural resources", "To promote ecosystem resilence", "All of the above"],
      answer: "All of the above"
    },
    {
    question:"What are the global challanges of biodiversity?",
    options: ["Invasive alien plants", "Climate change", "Habitat loss", "Pollution"],
    answer:"All of the above",
    }

  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  var questionContainer = document.getElementById("question-container");
  var optionsContainer = document.getElementById("options-container");
  var submitBtn = document.getElementById("submit-btn");
  var resultContainer = document.getElementById("result-container");
  
  // Function to display the current question
  function displayQuestion() {
    var question = questions[currentQuestion];
  
    questionContainer.textContent = question.question;
  
    optionsContainer.innerHTML = "";
  
    for (var i = 0; i < question.options.length; i++) {
      var option = document.createElement("div");
      option.classList.add("option");
      option.textContent = question.options[i];
      option.addEventListener("click", selectOption);
      optionsContainer.appendChild(option);
    }
  }
  
  // Function to handle option selection
  function selectOption(event) {
    var selectedOption = event.target;
    var selectedAnswer = selectedOption.textContent;
  
    var question = questions[currentQuestion];
    var correctAnswer = question.answer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
  
  // Function to display the quiz result
  function displayResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    submitBtn.style.display = "none";
  
    var resultText = "You scored " + score + " out of " + questions.length + " correct.";
    resultContainer.textContent = resultText;
    resultContainer.style.display = "block";
  }
  
  // Event listener for submit button click
  submitBtn.addEventListener("click", displayQuestion);
  
  // Display the first question
  displayQuestion();
  