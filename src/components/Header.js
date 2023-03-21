import React from "react";

const Header = (props) => {

    const {category,difficulty,handleStart,restartQuiz} = props;

    return(
        <div className="header">

            <h1 className="header-title" onClick={() => {
                handleStart()
                restartQuiz()
            }}>Quizzy</h1>

            <div className="info">
                <span className="info-span">{difficulty}</span>
                <span className="info-span">{category}</span>
            </div>
        </div>
    )

}

export default Header;