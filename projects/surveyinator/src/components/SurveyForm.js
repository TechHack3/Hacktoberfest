import React, { useState, useEffect } from "react";

const surveyQuestions = [
  {
    id: 1,
    question: "How satisfied are you with our products?",
    type: "rating",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    question: "How fair are the prices compared to similar retailers?",
    type: "rating",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    question:
      "How satisfied are you with the value for money of your purchase?",
    type: "rating",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    question:
      "On a scale of 1-10 how would you recommend us to your friends and family?",
    type: "rating",
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 5,
    question: "What could we do to improve our service?",
    type: "text",
  },
];

const Survey = () => {
  const [session, setSession] = useState(""); // unique session id for the customer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({}); // stores the customer's answers for each question

  useEffect(() => {
    const storedSession = localStorage.getItem("surveySession");
    if (storedSession) {
      setSession(storedSession);
      const storedAnswers = JSON.parse(
        localStorage.getItem(`surveyAnswers-${storedSession}`)
      );
      if (storedAnswers) {
        setAnswers(storedAnswers);
      }
    } else {
      const newSession =
        Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
      setSession(newSession);
      localStorage.setItem("surveySession", newSession);
    }
  }, []);

  
  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    localStorage.setItem(
      `surveyAnswers-${session}`,
      JSON.stringify({ ...answers, [questionId]: answer })
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSkipQuestion = () => {
    handleAnswer(surveyQuestions[currentQuestion].id, "");
    handleNextQuestion();
  };

  return (
    <div className="survey-container border-[20px] border-black h-screen flex justify-center items-center font-mono">
      <div className="shadow-lg sm:p-2 rounded-2xl p-10 sm:w-1/3 mx-10 bg-gray-100">
        {currentQuestion === 0 && (
          <div className="welcome-screen h-full flex flex-col justify-center items-center space-y-6 my-5">
            <h1 className="flex justify-center">Welcome to our survey!</h1>
            <div className="">
              <p className="text-center">
                Please take a few minutes to provide your feedback.
              </p>
              <button
                className="bg-black text-white flex mt-2 px-2 py-1 rounded-lg mx-auto hover:bg-gray-600"
                onClick={handleNextQuestion}
              >
                Start
              </button>
            </div>
          </div>
        )}
        {currentQuestion > 0 && (
          <div className="question-container h-full flex flex-col justify-center items-center space-y-6 mb-5">
            <h2>Question {currentQuestion}:</h2>
            <p className="text-center">
              {surveyQuestions[currentQuestion - 1].question}
            </p>

            {surveyQuestions[currentQuestion - 1].type === "rating" && (
              <div className="rating-options bg-black px-4 rounded-lg py-2 flex flex-wrap justify-center">
                {surveyQuestions[currentQuestion - 1].options.map((option) => (
                  <button
                    key={option}
                    className={`bg-white rounded-full mx-2 px-2 my-1 focus:bg-red-800 hover:bg-gray-500 hover:text-white focus:text-white ${
                      answers[surveyQuestions[currentQuestion - 1].id] ===
                      option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleAnswer(
                        surveyQuestions[currentQuestion - 1].id,
                        option
                      )
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {surveyQuestions[currentQuestion - 1].type === "text" && (
              <div className="text-input">
                <input
                  className="rounded-lg px-5 py-1"
                  type="text"
                  placeholder="Type your answer here..."
                  value={answers[surveyQuestions[currentQuestion - 1].id] || ""}
                  onChange={(e) =>
                    handleAnswer(
                      surveyQuestions[currentQuestion - 1].id,
                      e.target.value
                    )
                  }
                />
              </div>
            )}

            <div className="navigation-buttons flex space-x-2">
              {currentQuestion > 1 && (
                <button
                  className="previous-button bg-black text-white flex mt-2 px-2 py-1 rounded-lg mx-auto hover:bg-gray-600"
                  onClick={handlePreviousQuestion}
                >
                  Previous
                </button>
              )}

              {currentQuestion < surveyQuestions.length && (
                <button
                  className="skip-button bg-black text-white flex mt-2 px-2 py-1 rounded-lg mx-auto hover:bg-gray-600"
                  onClick={handleSkipQuestion}
                >
                  Skip
                </button>
              )}

              {currentQuestion < surveyQuestions.length && (
                <button
                  className="next-button bg-black text-white flex mt-2 px-2 py-1 rounded-lg mx-auto hover:bg-gray-600"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              )}
            </div>
            {currentQuestion === surveyQuestions.length && (
              <div className="thanks-message">
                <h1>Thank you for your feedback!</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
