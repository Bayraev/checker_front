import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../app/features/questionSlice';
import Cards from '../components/Cards/Cards';
import Categories from '../components/Categories';
import NewQuestions from '../components/NewQuestions';

const MainPage = ({styles}) => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getQuestions())
    }, [dispatch])
    return (
        <div className={styles.wrapper}>
            <Categories />
            <NewQuestions />
            <Cards />
        </div>
    );
};

export default MainPage;