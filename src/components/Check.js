import React, { useRef, useState } from "react";

const Check = (props) => {

    const { checkAnswers, handleStart, correct, restartQuiz, correctAnswerText } = props;

    const [refresh, setRefresh] = useState(false)

    const inputArray = Array.from(document.getElementsByClassName("answer"))

    const changeColor = () => {
        inputArray.forEach(input => {
            correctAnswerText.forEach(correctAnswer => {
                if (input.value === correctAnswer) {
                    input.classList.add("correct")
                }
            })
        })
    }

    return (
        <div className="check-div">
            {!refresh && <input className="check-button first" type="submit" value="Check your answers!" onClick={() => {
                checkAnswers()
                setRefresh(true)
                changeColor()
            }} />}

            {refresh && <span className="correct-count">You scored {correct}/5 correct answers!</span>}

            {refresh && <input className="check-button" type="submit" value="Click for a new Quiz!" onClick={() => {
                handleStart()
                restartQuiz()
            }} />
            }
        </div>
    )


}

export default Check;