import React from "react";
import styled from "styled-components";
import kakaoSocialImg from "../../assets/SocialLoginButton/kakao icon.png";
import googleSocialImg from "../../assets/SocialLoginButton/google icon.png";

const StyledImage = styled.img`
    width: 3rem;
`;

const StyledButton = styled.button`
    background: none;
    border: none;
`;

function SocialLoginSignupButton (props) {
    if (props.name === "kakao") {
        return (
            <StyledButton>
                <StyledImage src={kakaoSocialImg} />
            </StyledButton>
        );
    } else {
        return (
            <StyledButton>
                <StyledImage src={googleSocialImg} />
            </StyledButton>
        );
    }
}

export default SocialLoginSignupButton;