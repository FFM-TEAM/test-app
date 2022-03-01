import React from 'react';
import styled from "styled-components";
import Layout from './common/Layout';
import HeaderTemplate from './HeaderTemplate';
//import ImageSrc from '../img/GettyImages.jpg';

interface Props {
    //children: React.ReactNode;
    children: React.ReactNode;
}

const LoginBox = styled.div`
    /* 로그인 */
    position: absolute;
    width: 384px;
    height: 511px;
    left: 855px;
    top: 135px;

background: rgba(255, 255, 255, 0.1);
/* Dark 05 */

border: 1px solid #383838;
box-sizing: border-box;
border-radius: 6px;

`;
const PrimeTextA = styled.div`
/* Prime_text_1 */


position: absolute;
left: 3.12%;
right: 71.41%;
top: 44.86%;
bottom: 42.08%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 47px;
letter-spacing: -0.1em;

/* Onbg dark */

color: #F4F5F6;
`;

const PrimeTextB = styled.div`
/* 로그인 */


position: sticky;
width: 89px;
height: 47px;
left: 1003px;
top: 185px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 47px;
display: flex;
align-items: center;

/* Onbg dark */

color: #F4F5F6;
`;

const EditTextA = styled.div`
position: fixed;
width: 344px;
height: 40px;
left: 876px;
top: 287px;


`;
const EditTextB = styled.div`
position: fixed;
width: 344px;
height: 40px;
left: 876px;
top: 330px;

`;

const EditInput = styled.input`
/* Rectangle 4 */


position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: rgba(255, 255, 255, 0.7);
border: 1px solid #E0E0E0;
box-sizing: border-box;
border-radius: 6px;
`;

const CheckBox = styled.div`
position: fixed;
width: 20px;
height: 20px;
left: 876px;
top: 392px;


background: #609FFF;
border-radius: 3px;
`;

const TextA = styled.div`
/* 로그인 정보 저장 */


position: relative;
left: 12.62%;
top: 41.14%;
bottom: 42.64%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height */


/* Onbg dark */

color: #F4F5F6;

`;

const TextB = styled.div`
/* 비밀번호를 잊으셨나요? */


position: relative;
left: 62%;
top: 37.1%;
bottom: 42.64%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.05em;
text-decoration-line: underline;

/* Onbg dark */

color: #F4F5F6;

`;

const ButtonDiv = styled.div`
    position: absolute;
    left: 103px;
    width: 171px;
    height: 56px;
    bottom: 159px;
`;

const ButtonBox = styled.div`
/* Rectangle 3 */


position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Primary dark 50 */

background: #6C99F2;
border-radius: 6px;
`;

const ButtonText = styled.label`
/* 로그인 */
position: absolute;
width: 132px;
height: 21px;
left: calc(77% - 132px/2);
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


const Line = styled.line`
/* Line 4 */
position: fixed;
    width: 344px;
    height: 0px;
    left: 876px;
    top: 506px;

border: 1px solid rgba(255, 255, 255, 0.5);
`;

const LineText = styled.text`
/* or */


position: absolute;
width: 15px;
height: 21px;
left: 1040px;
top: 491px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: rgba(255, 255, 255, 0.5);
`;
const GoogleBtnDiv = styled.div`
/* Btn_goolge / light */
position: absolute;
width: 170px;
height: 57px;
left: 5%;
bottom: 67px;
`;

const GoogleBtnBox = styled.div`
/* Rectangle 3 */


position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: #DD4B39;
border: 1px solid #DD4B39;
box-sizing: border-box;
border-radius: 6px;
`;

const FaceBookBtnDiv = styled.div`
/* Btn_facebook / light */
position: absolute;
width: 170px;
height: 57px;
left: 51%;
bottom: 67px;

`;

const FaceBookBtnBox = styled.div`
/* Rectangle 3 */


position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: #3B5998;
border: 1px solid #3B5998;
box-sizing: border-box;
border-radius: 6px;
`;

const TextC = styled.div`
position: absolute;
    left: 77px;
    top: 466px;

    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: -0.05em;

    /* Onbg dark */

    color: #F4F5F6;
`;


const TextD = styled.div`
position: absolute;
    left: 244px;
    top: 466px;

    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: -0.05em;
text-decoration-line: underline;

    /* Onbg dark */

    color: #609FFF;
`;

function Login({ children, ...props }: Props) {
    return (
        <Layout >{children}
            <HeaderTemplate>
            </HeaderTemplate>
            <PrimeTextA>
                {/* <pre> */}
                쇼핑몰 관리자를 위한
                오픈마켓 통합솔루션 시스템
                {/* </pre> */}

            </PrimeTextA>
            <LoginBox>
                <PrimeTextB>로그인</PrimeTextB>
                <EditTextA>
                    <EditInput placeholder={"이메일을 입력해주세요."}></EditInput>
                </EditTextA>
                <EditTextB>
                    <EditInput placeholder={"비밀번호를 입력해주세요."}></EditInput>
                </EditTextB>
                <CheckBox></CheckBox>
                <TextA>로그인 정보 저장</TextA>
                <TextB>비밀번호를 잊으셨나요?</TextB>

                <ButtonDiv>
                    <ButtonBox>
                        <ButtonText>로그인</ButtonText>
                    </ButtonBox>
                </ButtonDiv>

                <Line>
                    {/* <LineText>or</LineText> */}
                </Line>

                <GoogleBtnDiv>
                    <GoogleBtnBox></GoogleBtnBox>
                </GoogleBtnDiv>
                <FaceBookBtnDiv>
                    <FaceBookBtnBox></FaceBookBtnBox>
                </FaceBookBtnDiv>

                <TextC>아직 프라임 회원이 아니신가요?</TextC><TextD>회원가입</TextD>
            </LoginBox>
        </Layout>
    );
}

export default Login;