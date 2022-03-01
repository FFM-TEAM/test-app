import React from 'react';
import styled from "styled-components";
import LogoSrc from '../img/GettyImages.jpg';
// background-image: url(${LogoSrc});

interface Props {
    //children: React.ReactNode;
    children: React.ReactNode;
}
const Conatiner = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;

    /* Bg dark */
    background: #1B1E25; 
`;

function Layout({ children }: Props) {
    return <Conatiner>{children}</Conatiner>
}

export default Layout;