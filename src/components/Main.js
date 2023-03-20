import React, { useState, useEffect, useRef } from 'react';

const Main = (props) => {

    const { getAnswers, getCorrectAnswerText, text, correctAnswer, incorrectAnswers, id, index} = props;

    const [inputArray, setInputArray] = useState([]);

    incorrectAnswers.push(correctAnswer)

    let fullAnswers = useRef(incorrectAnswers.slice(0, 4)
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    )

    useEffect(() => {
        setInputArray(Array.from(document.getElementsByClassName(`${id}`)))
        getCorrectAnswerText(correctAnswer)
    }, [])

    const handleClick = (event) => {
        const { target } = event;

        inputArray.forEach(input => {
            input.classList.remove("checked")
        })

        target.classList.add("checked")

        getAnswers(event)
    }

    const changeColor = () => {
        inputArray.forEach(input => {
            if (input.value === correctAnswer) {
                input.classList.add("correct")
            }
            else {
                input.classList.add("false")
            }
        })
    }

    return (
        <div className='question-div'>

            <p className='question'>{text}</p>

            <div className='answer-div' id={`answer${index}`} >
                <input type="button" value={fullAnswers.current[0]} className={`answer ${id}`} onClick={handleClick} />
                <input type="button" value={fullAnswers.current[1]} className={`answer ${id}`} onClick={handleClick} />
                <input type="button" value={fullAnswers.current[2]} className={`answer ${id}`} onClick={handleClick} />
                <input type="button" value={fullAnswers.current[3]} className={`answer ${id}`} onClick={handleClick} />
            </div>

        </div>
    )

}

export default Main;