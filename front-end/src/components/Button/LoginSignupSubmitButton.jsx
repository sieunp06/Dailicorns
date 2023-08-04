import React from "react";
import styled from "styled-components";

const LoginSignupButton = styled.button`
    display: block;
    margin: 0 auto;

    height: 2.5rem;
    width: 20.5rem;

    border: none;
    border-radius: 10px;

    background-color: #665A53;
    color: white;

    font-weight: bold;
`;

function LoginSignupSubmitButton (props) {
    return (
        <LoginSignupButton>{props.title}</LoginSignupButton>
    );
}

export default LoginSignupSubmitButton;