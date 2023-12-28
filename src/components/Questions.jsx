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
                            <p className={'answer'}>{t('awnser1')}</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>2</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ3")}</h6>
                            <p className={'answer'}>{t('awnser2')}</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>3</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ4")}</h6>
                            <p className={'answer'}>{t('awnser3')}</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>4</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ5")}</h6>
                            <p className={'answer'}>{t('awnser4')}</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>5</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ6")}</h6>
                            <p className={'answer'}>{t('awnser5')}</p>
                        </div>
                    </Question>
                    <Question>
                        <div className={'number'}>6</div>
                        <div className={'text'}>
                            <h6 className={'question'}>{t("FAQ7")}</h6>
                            <p className={'answer'}>{t('awnser6')}</p>
                        </div>
                    </Question>

                </div>

            </QuestionsContainer>

        </>
    );
}

export default Questions;