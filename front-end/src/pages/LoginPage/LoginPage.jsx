import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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

function LoginPage(props) {
    return (
        <div>
            <section>
                <Title></Title>
                <LoginSignupInsert title="ID"></LoginSignupInsert>
                <LoginSignupInsert title="PW"></LoginSignupInsert>
                <LoginSignupSubmitButton title="Login"></LoginSignupSubmitButton>
            </section>
            <StyledSection>
                <Link to="/signup">
                    <LoginSignupTextButton title="Signup"></LoginSignupTextButton>
                </Link>
                
                <LoginSignupTextButton title="Forgot your ID/PW?"></LoginSignupTextButton>
            </StyledSection>
            <StyledSection>
                <SocialLoginSignupButton name="kakao"></SocialLoginSignupButton>
                <SocialLoginSignupButton name="google"></SocialLoginSignupButton>
            </StyledSection>
        </div>
    );
}

export default LoginPage;