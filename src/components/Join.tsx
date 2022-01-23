import React from 'react';
import styled from "styled-components";
import Layout from './common/Layout';

interface Props {
    //children: React.ReactNode;
    children: React.ReactNode;
}

const Header = styled.div`
    /* Tap_bg */
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 88.89%;
    
    /* Dark 01 */
    
    background: #272930;
    /* Dark 01 */
    
    border: 1px solid #272930;
    box-sizing: border-box;

`;

const Logo = styled.div`
    position: absolute;
    left: 3.12%;
    right: 87.5%;
    top: 4.03%;
    bottom: 92.78%;
`;

const Test1 = styled.text`
/* 서비스 */


position: absolute;
left: 62.97%;
right: 32.66%;
top: 3.47%;
bottom: 92.36%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;

/* identical to box height */
text-align: center;

/* Onbg dark */
color: #F4F5F6;

`;


function Join({ children } : Props) {
    return (
        <Layout>{children}
            <Header>
                <Logo />
                <Test1>서비스</Test1>
            </Header>
        </Layout>
    );
}

export default Join;