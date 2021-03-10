import React from 'react';

export const Result = ({ quiz }) => {

    console.log('FINAL : ', quiz.error);

    const againHandler = () => {
        quiz.setFinished(false);
        quiz.setCurrentQuestions(0);
        quiz.setError(false);
    }

    if (quiz.error === true) {
        <div className="container main-block">
            <div className="row">
                <div className="col s12">
                        <p> Вы прошли тест </p>
                </div>
            </div>
        </div>
    }


    return (
        <>
            <div className="container main-block">
                <div className="row">
                    <div className="col s12">
                        {
                            quiz.error ?
                                <div>
                                    <p> Вы сделали ошибку, попробуйте еще раз </p>
                                    <button className="waves-effect waves-light btn-large" onClick={againHandler}> Пройти тест еще раз </button>
                                </div>
                            :
                                <h3> Поздравляем! Вы прошли тест! </h3>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
}