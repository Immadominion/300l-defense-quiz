// import { questions } from './data/questions.js';


const questions = [
    // {
    //     question: "How many questions do you want to answer?",
    //     answers: ["5", "10", "All"],
    //     correct: "Choose"
    // },
    {
        question: "What is the full meaning of CSAAE?",
        answers: ["Center for social awareness, advocacy and ethics", "Center for special activity, ability and ethics", "Center for supreme ability, activity and expression"],
        correct: "Center for social awareness, advocacy and ethics"
    },
    {
        question: "What is the full meaning of SIWES?",
        answers: ["Student Industrial Work Experience Scheme", "Students IT Work-Experience System", "Student IT Work And Exceptional Solution"],
        correct: "Student Industrial Work Experience Scheme"
    },
    {
        question: "What established the SIWES?",
        answers: ["ITF", "CSAAE", "TETFUND"],
        correct: "ITF"
    },
    {
        question: "What is the full meaning of ITF?",
        answers: ["Industrial Training Fund", "Industrial Tech Family", "International Technology Firm"],
        correct: "Industrial Training Fund"
    },
    {
        question: "When was SIWES established?",
        answers: ["1974", "1991", "1985"],
        correct: "1974"
    },
    {
        question: "What is the primary purpose of SIWES?",
        answers: ["To close the gap between work and school", "To give students work experience", "Another holiday"],
        correct: "To close the gap between work and school"
    },
    {
        question: "What is the full meaning of SET?",
        answers: ["Science, Engineering and Technology", "Software Engineering and Technology", "Software Engineering Technician"],
        correct:"Science, Engineering and Technology"
    },
    {
        question: "What is the full meaning of RPSs?",
        answers: ["Relevant Production Skills", "Renewable Passive Software", "Resourceful Power system"],
        correct:"Relevant Production Skills"
    },
    {
        question: "What is the primary objective of SIWES?",
        answers: [
            "To provide students with industrial skills and experience",
            "To provide financial support to students",
            "To promote entrepreneurship among students"
        ],
        correct: "To provide students with industrial skills and experience"
    },
    {
        question: "Who established CSAAE?",
        answers: [
            "Dr. Godswill Uchenna Agbagwa",
            "Dr. Charles and Mrs. Evelyn Agbagwa",
            "Dr. Godswill Uchenna and Mrs. Evelyn Agbagwa"
        ],
        correct: "Dr. Godswill Uchenna Agbagwa"
    },
    {
        question: "What are the three main programs pursued by CSAAE?",
        answers: [
            "Socioeconomic, Advocacy, and Ethics",
            "Youth Empowerment, Human Rights, and Governance",
            "Career Building, Entrepreneurship, and SEACON"
        ],
        correct: "Socioeconomic, Advocacy, and Ethics"
    },
    {
        question: "What year was SIWES established?",
        answers: [
            "1974",
            "1985",
            "1991"
        ],
        correct: "1974"
    },
    {
        question: "Which programming language is primarily used for adding interactivity and dynamic behavior to web pages?",
        answers: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        correct: "JavaScript"
    },
    {
        question: "What is the significance of Semantic HTML?",
        answers: [
            "It makes the structure of web pages more meaningful",
            "It enables styling of web pages",
            "It facilitates server-side scripting"
        ],
        correct: "It makes the structure of web pages more meaningful"
    },
    {
        question: "What role does ChatGPT play in web design?",
        answers: [
            "Enhanced user interaction and engagement",
            "Automated server-side coding",
            "Creating complex layouts using Grid"
        ],
        correct: "Enhanced user interaction and engagement"
    },
    {
        question: "Which CSS layout model is used for arranging elements in a single direction?",
        answers: [
            "Flexbox",
            "Grid",
            "Box Model"
        ],
        correct: "Flexbox"
    },
    {
        question: "What does DOM manipulation refer to?",
        answers: [
            "Dynamically modifying web page content",
            "Optimizing CSS stylesheets",
            "Conducting server-side operations"
        ],
        correct: "Dynamically modifying web page content"
    },
    {
        question: "How does JavaScript support asynchronous programming?",
        answers: [
            "By allowing tasks to be executed concurrently",
            "By executing tasks in a sequential manner",
            "By eliminating the need for HTML"
        ],
        correct: "By allowing tasks to be executed concurrently"
    }
];


document.addEventListener('DOMContentLoaded', function() {
    console.log(questions);
   
    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');

    function showQuestion(index) {
        const questionObj = questions[index];
        quizContainer.innerHTML = `
            <div class="quiz-question">
                <p>${questionObj.question}</p>
                ${questionObj.answers.map(answer => `
                    <label>
                        <input type="radio" name="question${index}" value="${answer}"> ${answer}
                    </label><br>
                `).join('')}
            </div>
        `;
    }

    function checkAnswer() {
        const selectedAnswer = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === questions[currentQuestionIndex].correct) {
            score++;
            console.log("INFO: Correct");
        }
    }

    function showNextQuestion() {
        const selectedAnswer = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
        if (selectedAnswer) {
            checkAnswer();
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
                if (currentQuestionIndex === questions.length - 1) {
                    nextButton.style.display = 'none';
                    submitButton.style.display = 'block';
                }
            }
        } else {
            alert('Please select an answer.');
        }
    }

    function calculateScore() {
        checkAnswer(); // Ensure last question's answer is checked before calculating score
        resultContainer.textContent = `Your score is ${score} out of ${questions.length}`;
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
    }

    nextButton.addEventListener('click', showNextQuestion);
    submitButton.addEventListener('click', calculateScore);

    showQuestion(currentQuestionIndex);
   
});
