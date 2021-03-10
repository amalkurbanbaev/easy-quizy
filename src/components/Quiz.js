import React from 'react';
import { QuizData } from './QuizData';
import { Result } from './Result';

export const Quiz = ({ quiz }) => {

    console.log(quiz.userAnswers);
    console.log(quiz.answers);

    if (!quiz) {
		return <p className="center">Вопросов нет</p>
	}

    if (quiz.finished) {
       return <Result quiz={quiz} />
    }

    const nextQuestionHandler = () => {
        quiz.setCurrentQuestions(quiz.currentQuestions + 1);
        quiz.setDisabled(true);
        if (quiz.userAnswers !== quiz.answers) {
           quiz.setError(true);
           quiz.setFinished(true);
        }
    }

    const finishedHandler = () => {
        quiz.setFinished(true);
        if (quiz.userAnswers !== quiz.answers) {
            quiz.setError(true);
        }
    }

    const checkClick = (event) => {
        quiz.setDisabled(false);
        quiz.setUserAnswers(event.target.value);
    }

    return (
        <>
            <div className="container main-block">
                <div className="row">
                    <div className="col s12">
                        <h2> { quiz.questions } </h2>
                        <span className="mb-30"> Вопрос { quiz.currentQuestions + 1 } из { QuizData.length } </span>
                        <div className="btn--group mb-30 mt-30">
                            {
                                quiz.options.map((option, index) => (
                                    <button onClick={checkClick} className="waves-light btn-small" key={index} value={option}> {option} </button>
                                ))
                            }
                        </div>
                        
                        { quiz.currentQuestions < QuizData.length - 1 ? 
                            <button disabled={quiz.disabled} onClick={nextQuestionHandler} className="waves-effect waves-light btn-large"> Следующий вопрос </button>
                        :
                            <button disabled={quiz.disabled} onClick={finishedHandler} className="waves-effect waves-light btn-large"> Перейти к результатам </button>
                        }
                        
                    </div>
                </div>		
            </div>
        </>
    )
}