import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../app/features/questionSlice';
import styles from './NewQuestions.module.scss'
const NewQuestions = () => {
    const [questionValue, setQuestionValue] = useState('')
    const [answerValue, setAnswerValue] = useState('')

    const [isQuestion, setIsQuestion] = useState(false)
    const [category, setCategory] = useState('Hard')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addQuestion({ card: {question: questionValue, answer: answerValue}, category}))

        setAnswerValue('')
        setQuestionValue('')
    }

    const handleIsQuestion = (e) => {
        e.preventDefault()
        setIsQuestion(!isQuestion)
    }


    const handleLvl = (e, value) => {
        e.preventDefault()
        setCategory(value)
        
    }

    return (
        <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
            <div className={styles.top_bar}>
                <button onClick={(e) => handleIsQuestion(e)}>{isQuestion ? 'Question' : 'Answer' }</button>
                <div>
                    <button
                        className={category === "Easy" ? styles.easy : styles.button} 
                        onClick={(e) => handleLvl(e, "Easy")}> Easy </button>
                    <button
                        className={category === "Normal" ? styles.normal : styles.button} 
                        onClick={(e) => handleLvl(e, "Normal")}> Normal </button> 
                    <button
                        className={category === "Hard" ? styles.hard : styles.button} 
                        onClick={(e) => handleLvl(e, "Hard")}> Hard </button>
                </div>                
            </div>
            
                {
                    isQuestion === true
                         ? <textarea
                         name="1"
                         id=""
                         cols="30"
                         rows="10"
                         onChange={(e) => setQuestionValue(e.target.value)}
                         value={questionValue}
                         />
                         :
                         <textarea
                         name="1"
                         id=""
                         cols="30"
                         rows="10"
                         onChange={(e) => setAnswerValue(e.target.value)}
                         value={answerValue}
                         />
                }
                <button>SEND</button>
        </form>
    );
};

export default NewQuestions;