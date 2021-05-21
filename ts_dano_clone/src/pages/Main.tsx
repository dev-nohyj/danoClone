import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';

function Main(props: { history: any }) {
    const { history } = props;
    return (
        <>
            <Header />
            <Slider />
        </>
    );
}

export default Main;
