import { useState, useEffect } from 'react';

export const useQuiz = (QuizData) => {

    const [currentQuestions, setCurrentQuestions] = useState(0);
    const [questions, setQuestions] = useState(null);
    const [options, setOptions] = useState([]);
    const [answers, setAnswers] = useState(null);
    const [userAnswers, setUserAnswers] = useState(null);
    const [finished, setFinished] = useState(false);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setQuestions(QuizData[currentQuestions].question);
        setOptions(QuizData[currentQuestions].option);
        setAnswers(QuizData[currentQuestions].answer);
    }, [QuizData, currentQuestions, finished]);

    return { currentQuestions, options, answers, questions, finished, error, disabled, userAnswers, setCurrentQuestions, setFinished, setDisabled, setError, setUserAnswers };
}