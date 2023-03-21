import React, { useEffect, useState } from 'react';

import Intro from './components/Intro';
import Header from './components/Header';
import Main from './components/Main';
import Check from './components/Check';

const App = () => {

  const [start, setStart] = useState(false)

  const [quiz, setQuiz] = useState({
    category: "arts_and_literature",
    difficulty: "easy",
  })

  const [categoryValue, setCategoryValue] = useState("Arts & Literature")

  const [questions, setQuestions] = useState([])

  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: ""
  })

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [correctAnswerText,setCorrectAnswerText] = useState([])

  useEffect(() => {

    fetch(`https://the-trivia-api.com/api/questions?limit=5&difficulty=${quiz.difficulty}&categories=${quiz.category}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
      })

  }, [quiz])

  const handleStart = () => {
    setStart(prevStart => !prevStart)
    setCorrectAnswers(0)
  }

  const restartQuiz = () => {
    setQuiz({category:"arts_and_literature",difficulty:"easy"})
    setCategoryValue("Arts & Literature")
    setCorrectAnswerText([])
  }

  const createQuiz = (event) => {
    const { target } = event;
    const value = target.value;
    const name = target.name;

    setQuiz(prevQuiz => {
      return {
        ...prevQuiz,
        [name]: value
      }
    })

    name === "category" && setCategoryValue(target.options[target.selectedIndex].text)
  }


  const getAnswers = (event) => {
    const { target } = event;
    const value = target.value;
    const id = target.parentElement.id;

    setAnswers(prevAnswers => {
      return {
        ...prevAnswers,
        [id]: value
      }
    })
  }

  const checkAnswers = () => {

    const answersArray = Object.keys(answers).map((key) => [Number(key), answers[key]]);

    for (let i = 0; i < 5; i++) {

      if (questions[i].correctAnswer === answersArray[i][1]) {
        setCorrectAnswers(prevCount => { return prevCount + 1 })
      }

    }

  }

  const getCorrectAnswerText = (answer) => {
    setCorrectAnswerText(prev => {
      return [...prev,answer]
    })
  }

  let i = 0;
  const questionElements = questions.map(ques => {
    i++;
    return <Main getAnswers={getAnswers} text={ques.question} correctAnswer={ques.correctAnswer} incorrectAnswers={ques.incorrectAnswers} getCorrectAnswerText={getCorrectAnswerText} key={ques.id} id={ques.id} index={i}/>
  })

  return (
    !start ? <Intro handleStart={handleStart} createQuiz={createQuiz} />
      :
      <div>
        <Header category={categoryValue} difficulty={quiz.difficulty} handleStart={handleStart} restartQuiz={restartQuiz} />
        <div className='quiz-page'>
          {questionElements}
        </div>
        <Check checkAnswers={checkAnswers} handleStart={handleStart} correct={correctAnswers} correctAnswerText={correctAnswerText} restartQuiz={restartQuiz}/>
      </div>


  )

}

export default App;