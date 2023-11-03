import React from 'react';
import {
    ArrowBtn,
    Coment,
    ComentsContainer,
    CustomersReviewContainer,
    Shadow
} from "../styledComponents/CustomersReview-style";
import backGround from '../public/reviewBackground.png';

function CustomersReview() {
    return (
        <>
            <CustomersReviewContainer image={`url(${backGround})`}>
                <Shadow/>
                <h2>Customers Review</h2>
                <ComentsContainer>

                    <ArrowBtn>&lt;</ArrowBtn>

                    <Coment>
                        <img alt={'profile'} src={require('../public/images.jfif')}/>
                        <div className={'comments-background'}>
                            <h6>Reza Mafakheri</h6>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </Coment>

                    <ArrowBtn>&gt;</ArrowBtn>

                </ComentsContainer>
            </CustomersReviewContainer>
        </>
    );
}

export default CustomersReview;