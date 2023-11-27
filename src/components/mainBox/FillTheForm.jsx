import React from 'react';
import {BottomPart, FormsInput, MainBoxContainer, SecondContainer} from "../../styledComponents/MainBox-style";

function FillTheForm(props) {
    return (
        <MainBoxContainer>
            <h2>Fill The Form</h2>

            <SecondContainer>
                <h6>First Name</h6>
                <FormsInput/>
                <h6>Last Name</h6>
                <FormsInput/>
                <h6>Number</h6>
                <FormsInput/>
                <h6>Email</h6>
                <FormsInput/>
            </SecondContainer>

            <BottomPart>
                <div onClick={()=>{props.transform(3)}}>
                    <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                    <div>Back</div>
                </div>

                <button onClick={()=>{props.transform(5)}}>Next</button>
            </BottomPart>

        </MainBoxContainer>
    );
}

export default FillTheForm;