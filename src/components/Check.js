import React, { useState } from "react";

const Check = (props) => {

    const { checkAnswers, handleStart, correct, restartQuiz, correctAnswerText } = props;

    const [refresh, setRefresh] = useState(false)

    const inputArray = Array.from(document.getElementsByClassName("answer"))

    const changeColor = () => {

        let j = 0;
        let k = 4;

        for (let i = 0; i < 5; i++) {

            let currentAnswer = correctAnswerText[i]

            for (j; j < k; j++) {

                if (inputArray[j].value === currentAnswer && inputArray[j].classList.contains("checked")) {
                    inputArray[j].classList.add("correct")
                }

                else if(inputArray[j].value === currentAnswer && !inputArray[j].classList.contains("checked") ){
                    inputArray[j].classList.add("empty")
                }

                else if(inputArray[j].value !== currentAnswer && inputArray[j].classList.contains("checked")){
                    inputArray[j].classList.add("false")
                }

            }

            k += 4;

        }

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