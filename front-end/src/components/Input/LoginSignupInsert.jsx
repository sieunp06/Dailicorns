import React from "react";
import styled from "styled-components";

const LoginSignupInsertInput = styled.input`
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    padding: 0 0 0 0.6rem;

    height: 2.5rem;
    width: 20rem;

    border: none;
    border-radius: 10px;
`;

function LoginSignupInsert (props) {
    return (
        <LoginSignupInsertInput placeholder={props.title}></LoginSignupInsertInput>
    );
}

export default LoginSignupInsert;