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



const CheckBoxWrapper = styled.div`
position: absolute;
left: 92.81%;
right: 3.12%;
top: 3.89%;
bottom: 92.78%;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  line-height: 75px;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  line-height: 75px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Test1 = styled.div`
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
line-height: 75px;

/* identical to box height */
text-align: center;

/* Onbg dark */
color: #F4F5F6;

`;

const Test2 = styled.div`
/* 서비스 */


position: absolute;
left: 72.02%;
right: 22.2%;
top: 3.47%;
top: 3.47%;
bottom: 92.36%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 75px;

/* identical to box height */
text-align: center;

/* Onbg dark */
color: #F4F5F6;

`;

const Test3 = styled.div`
/* 서비스 */


position: absolute;
left: 82.49%;
right: 11.74%;
top: 3.47%;
bottom: 92.36%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 75px;

/* identical to box height */
text-align: center;

/* Onbg dark */
color: #F4F5F6;

`;

const JoinBox = styled.div`
    /* 회원가입 */


    position: absolute;
    width: 600px;
    height: 500px;
    left: 367px;
    top: 140px;

    // width: 439px;
    // height: 355px;
    // left: 421px;
    // top: 140px;

    /*임시*/
    border: 1px solid;
    color: #F4F5F6;
`;

const PrimeText = styled.div`
/* Prime_text_1 */


// position: absolute;
left: 43.7%;
right: 37.47%;


position: absolute;
//left: 164px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 47px;
letter-spacing: -0.05em;

/* Onbg dark */

color: #F4F5F6;


`;

const EditTextA = styled.div`
position: absolute;
width: 438px;
height: 66px;
left: 87px;
top: 100px;

`;
const EditTextB = styled.div`
position: absolute;
width: 438px;
height: 66px;
left: 87px;
top: 180px;

`;
const EditTextC = styled.div`
position: absolute;
width: 438px;
height: 66px;
left: 87px;
top: 260px;

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

const CheckBoxB = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    left: 87px;
    top: 337px;
    /*임시*/
    border: 1px solid;
    color: #F4F5F6;
`;

const CheckTextB = styled.label`
    position: absolute;
    width: 408px;
    height: 20px;
    top: 337px;
    left: 117px;

    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    letter-spacing: -0.02em;

    /* Onbg dark */

    color: #F4F5F6;
    /*임시*/
    border: 1px solid;
    color: #F4F5F6;
`;

const Button = styled.div`
    position: absolute;
    left: 573px;
    right: 38%;
    top: 535px;
    bottom: 137px;


    /* Primary dark 50 */
    background: #6C99F2;
    border-radius: 6px;
`;

const ButtonText = styled.label`
/* 이메일 인증 */


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

            <Header>
                <Logo />
                <Test1>서비스</Test1>
                <Test2>고객센터</Test2>
                <Test3>회원가입</Test3>
                <CheckBoxWrapper>
                    <CheckBox id="checkbox" type="checkbox" />
                    <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
            </Header>

            <JoinBox>
                <PrimeText>회원가입</PrimeText>
                <EditTextA>
                    <EditLabel>이메일</EditLabel>
                    <EditInput></EditInput>
                </EditTextA>
                <EditTextB>
                    <EditLabel>비밀번호</EditLabel>
                    <EditInput></EditInput>
                </EditTextB>
                <EditTextC>
                    <EditLabel>비밀번호 확인</EditLabel>
                    <EditInput></EditInput>
                </EditTextC>

                <CheckBoxB></CheckBoxB>
                <CheckTextB>프라임 이용 약관 및 개인정보취급방침 에 모두 동의합니다.</CheckTextB>
            </JoinBox>

            <Button>
                <ButtonText>이메일 인증</ButtonText>
            </Button>
        </Layout>
    );
}

export default Join;