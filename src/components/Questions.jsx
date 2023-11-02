import React from 'react';
import {Question, QuestionsContainer} from "../styledComponents/Questions-style";

function Questions() {
    return (
        <>
            <QuestionsContainer>
                <h2>Frequently Asked Question</h2>
                <div className={'all_questions_container'}>
                    <Question>
                        <div className={'number'}>1</div>
                        <div>
                            <h6 className={'question'}>How Long Does A Booking Take?</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div>
                            <h6 className={'question'}>How Long Does A Booking Take?</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div>
                            <h6 className={'question'}>How Long Does A Booking Take?</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div>
                            <h6 className={'question'}>How Long Does A Booking Take?</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div>
                            <h6 className={'question'}>How Long Does A Booking Take?</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div>
                            <h6 className={'question'}>How Long Does A Booking Take?</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>

                </div>

            </QuestionsContainer>

        </>
    );
}

export default Questions;