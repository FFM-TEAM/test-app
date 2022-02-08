import React from 'react';
import styled from "styled-components";
import Layout from './common/Layout';
import HeaderTemplate from './HeaderTemplate';

interface Props {
    //children: React.ReactNode;
    children: React.ReactNode;
}

const ResetBox = styled.div`
    /* 비밀번호 재설정 */


    position: absolute;
    width: 438px;
    height: 193px;
    left: 421px;
    top: 224px;
`;

const PrimeText = styled.div`
/* Prime_text_1 */


position: absolute;
left: 118PX;
//right: 42.03%;
//top: 224px;
bottom: 146px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 47px;
letter-spacing: -0.05em;

/* Onbg dark */

color: #F4F5F6;


`;

const TextA = styled.div`
position: absolute;
width: 433px;
height: 30px;
left: 15px;
top: 67px;

/* 03 Heading 3 */

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */


/* Onbg dark */

color: #F4F5F6;

`;

const EditTextA = styled.div`
position: absolute;
width: 438px;
height: 66px;
//left: 10px;
top: 120px;

`;
const EditLabel = styled.label`
/* 이메일 */


position: static;
left: 16.95%;
right: 16.95%;
top: 22.73%;
bottom: 22.73%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

display: flex;
align-items: center;

/* Onbg dark */

color: #F4F5F6;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;
const EditInput = styled.input`
/* Frame 23 */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
left: 0%;
right: 0%;
top: 39.39%;
bottom: 0%;
width: 100%;
/* Dark 02 */

background: #31343A;
/* Dark 03 */

border: 1px solid #3B3E44;
box-sizing: border-box;
border-radius: 4px;
`;

const Button = styled.div`
    position: absolute;
    left: 537px;
    right: 541px;
    top: 535px;
    bottom: 137px;


    /* Primary dark 50 */
    background: #6C99F2;
    border-radius: 6px;
`;

const ButtonText = styled.label`
/* 이메일 발송 */


position: absolute;
width: 132px;
height: 21px;
left: calc(50% - 74px/2);
top: calc(50% - 21px/2 - 0.5px);

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

/* Onbg dark */

color: #F4F5F6;


`;

function Join({ children, ...props } : Props) {
    return (
        <Layout>{children}
            <HeaderTemplate>
            </HeaderTemplate>

            <ResetBox>
                <PrimeText>비밀번호 재설정</PrimeText>
                <TextA>임시 비밀번호를 받으실 이메일 주소를 입력해주세요.</TextA>
                <EditTextA>
                    <EditLabel>이메일</EditLabel>
                    <EditInput placeholder={"이메일을 입력해주세요."}></EditInput>
                </EditTextA>
            </ResetBox>

            <Button>
                <ButtonText>이메일 발송</ButtonText>
            </Button>
        </Layout>
    );
}

export default Join;