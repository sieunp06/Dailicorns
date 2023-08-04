import React from "react";
import styled from "styled-components";

const DailicornsTitle = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

function Title () {
    return (
        <DailicornsTitle>Dailicorns</DailicornsTitle>
    );
}

export default Title;