import { useSelector } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.scss'

// functions


const Cards = () => {
    
    
    // array
    const questions = useSelector((state) => state.questions.questions)

    // дебаггер по кнопке, удалить
    const handleLog = () => {
        console.log(questions);
    }
    
    return (
        <div className={styles.cards}>
            {/* кнопка дебаггер */}
            <button onClick={()=>handleLog()}>log</button>

            {
                questions.map(card => {
                    return <Card card={card.card} styles={styles}/>
                } )
            }
            
        </div>
    );
};

export default Cards;