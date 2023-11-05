import React, {useState} from 'react';
import {
    ArrowBtn,
    Coment,
    ComentsContainer,
    CustomersReviewContainer,
    Shadow
} from "../styledComponents/CustomersReview-style";
import backGround from '../public/reviewBackground.png';
import '../App.css'

function CustomersReview() {
    let comments = [
        {
            profile: require('../public/images.jfif'),
            name: 'Reza Mafakheri',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\n' +
                ', sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            profile:require('../public/images.jfif'),
            name: 'Bita Saeedi',
            comment: 'hello my name is bita'
        },
        {
            profile: require('../public/images.jfif'),
            name: 'Zhina Ramezani',
            comment: 'this is TaxiFa'
        },
        {
            profile: require('../public/images.jfif'),
            name: 'Parisa Golmohamadi',
            comment: 'this is parisas comment'
        },
    ];
    let [currentIndex, setCurrentIndex] = useState(0);

    function handleNextClick() {
        setCurrentIndex((currentIndex + 1) % comments.length);
        console.log()
    }

    function handlePreviousClick() {
        setCurrentIndex((currentIndex - 1 + comments.length) % comments.length);
    }

    return (
        <>
            <CustomersReviewContainer image={`url(${backGround})`}>
                <Shadow/>
                <h2>Customers Review</h2>
                <ComentsContainer>

                    <ArrowBtn onClick={handlePreviousClick}>&lt;</ArrowBtn>

                    {comments.map((comment, index) => {
                        if(index===currentIndex){
                        return <Coment key={index}>
                            <img alt={'profile'} src={comment.profile}/>
                            <div className={'comments-background'}>
                                <h6>{comment.name}</h6>
                                <div>{comment.comment}</div>
                                <div className={'stars'}>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                            </div>

                        </Coment>}
                        })
                    }

                    <ArrowBtn onClick={handleNextClick}>&gt;</ArrowBtn>

                </ComentsContainer>
            </CustomersReviewContainer>
        </>
    );
}

export default CustomersReview;