import React from 'react';
import styled from "styled-components";

interface Props {
    //children: React.ReactNode;
    children: React.ReactNode;
}
const Conatiner = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: blue;
`;

function PageTemplate({ children } : Props) {
    return <Conatiner>{children}</Conatiner>
}

export default PageTemplate;