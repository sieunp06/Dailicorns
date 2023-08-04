import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    background: none;

    font-weight: bold;
`;

function LoginSignupTextButton (props) {
    return (
        <StyledButton>{props.title}</StyledButton>
    );
}

export default LoginSignupTextButton;