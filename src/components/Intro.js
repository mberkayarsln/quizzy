import React from "react";

const Intro = (props) => {

    return (
        <div className='intro-page'>

            <h1 className='intro-title'>Quiz App</h1>

            <span className='intro-desc'>Test yourself with random questions for fun!</span>

            <div className="create-quiz">
                <select className="diff-select select" onChange={props.createQuiz} name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select className="category-select select" onChange={props.createQuiz} name="category" >
                    <option value="arts_and_literature">Arts & Literature</option>
                    <option value="film_and_tv">Film & TV</option>
                    <option value="food_and_drink">Food & Drink</option>
                    <option value="general_knowledge">General Knowledge</option>
                    <option value="geography">Geography</option>
                    <option value="history">History</option>
                    <option value="music">Music</option>
                    <option value="science">Science</option>
                    <option value="society_and_culture">Society & Culture</option>
                    <option value="sport_and_leisure">Sport & Leisure</option>
                </select>
            </div>

            <input type="button" value="Start Quiz" className='intro-button' onClick={props.handleStart} />

        </div>
    )

}

export default Intro;