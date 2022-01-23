import React from 'react';
import styled from "styled-components";

interface Props {
    //children: React.ReactNode;
    children: React.ReactNode;
}
const Conatiner = styled.div`
    /* Signup-dark */
    position: absolute;
    width: 1280px;
    height: 720px;

    /* Bg dark */
    background: #1B1E25;
`;

function Layout({ children } : Props) {
    return <Conatiner>{children}</Conatiner>
}

export default Layout;