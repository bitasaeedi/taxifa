import React from 'react';
import {Question, QuestionsContainer} from "../styledComponents/Questions-style";

function Questions({t}) {
    return (
        <>
            <QuestionsContainer id={'faq'}>
                <h2>{t('FAQ1')}</h2>
                <div className={'all_questions_container'}>
                    <Question>
                        <div className={'number'}>1</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ2")}</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ2")}</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ2")}</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ2")}</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ2")}</h6>
                            <p className={'answer'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>1</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ2")}</h6>
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