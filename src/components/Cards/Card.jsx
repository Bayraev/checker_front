import React, { useState } from 'react';

const Card = ({ styles, card }) => {
    const [see, setSee] = useState(false)

    const handleSee = () => {
        setSee(!see)
    }
    return (
        <div className={styles.card} onClick={() => handleSee()}>
            {see === false ? <h1>Question</h1> : null}
            {
                see === false
                    ? <span>{card.question}</span>
                    : <span>{card.answer}</span>
            }
        </div>
    );
};

export default Card;