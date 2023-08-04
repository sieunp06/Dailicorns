import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import Title from "../../components/Header/DailicornsTitle";
import LoginSignupInsert from "../../components/Input/LoginSignupInsert";
import LoginSignupSubmitButton from "../../components/Button/LoginSignupSubmitButton";
import LoginSignupTextButton from "../../components/Button/LoginSignupTextButton";
import SocialLoginSignupButton from "../../components/Button/SocialLoginSignupButton";

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

function SignupPage (props) {
    return (
        <div>
            <section>
                <Title></Title>
                <LoginSignupInsert title="ID"></LoginSignupInsert>
                <LoginSignupInsert title="PW"></LoginSignupInsert>
                <LoginSignupSubmitButton title="Signup"></LoginSignupSubmitButton>
            </section>
            <StyledSection>
                <Link to="/">
                    <LoginSignupTextButton title="You have account already?"></LoginSignupTextButton>
                </Link>
            </StyledSection>
            <StyledSection>
                <SocialLoginSignupButton name="kakao"></SocialLoginSignupButton>
                <SocialLoginSignupButton name="google"></SocialLoginSignupButton>
            </StyledSection>
        </div>
    );
}

export default SignupPage;