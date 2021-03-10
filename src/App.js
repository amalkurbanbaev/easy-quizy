import React from 'react';
import 'materialize-css';
import { useQuiz } from './components/Hooks/useQuiz';
import { Quiz } from './components/Quiz.js';
import { QuizData } from './components/QuizData';

function App() {

	const quiz = useQuiz(QuizData);

	return (
		<>
			<Quiz quiz={quiz} />
		</>
	);
}

export default App;