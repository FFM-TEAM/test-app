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
    width: 365px;
    height: 349px;
    left: 450px;
    top: 185px;

`;

const PrimeText = styled.div`
/* Prime_text_1 */


position: absolute;
left: 80px;
right: 64px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 44px;
/* identical to box height, or 137% */

text-align: center;

/* Onbg dark */

color: #F4F5F6;


`;

const TextBoxA = styled.div`
/* Rectangle 86 */


position: absolute;
width: 350px;
height: 96px;
left: 8px;
top: 77px;

/* Dark 02 */

border: 0.739726px solid #31343A;
box-sizing: border-box;
`;

const TextA = styled.div`
position: relative;
top: 29%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 34px;

align-items: center;
text-align: center;

/* Onbg dark */

color: #F4F5F6;

`;

const TextB = styled.div`
position: absolute;
bottom: 40.83%;
left: 106px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: -0.05em;

/* Onbg dark */

color: #F4F5F6;
`;

const TextC = styled.div`
position: absolute;
bottom: 33.83%;
left: 22px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: -0.05em;

/* Onbg dark */

color: #F4F5F6;
`;

const TextBoxB = styled.div`
position: absolute;
    width: 351px;
    left: 3%;
    top: 72%;
`;

const TextD = styled.div`

//position: absolute;
left: 35.16%;
right: 50.55%;
top: 64.72%;
bottom: 31.94%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* identical to box height */


letter-spacing: -0.05em;

/* Onbg dark */

color: #F4F5F6;
`;

const LinkA = styled.div`
position: absolute;
    right: 3.33%;
    top: 3.72%;
    bottom: 31.94%;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height */

text-align: center;
letter-spacing: -0.05em;
text-decoration-line: underline;

/* Primary 60 */

color: #5F88EA;

`;

const TextBoxC = styled.div`
position: absolute;
    width: 351px;
    left: 3%;
    top: 85%;
`;

function EmailAuth({ children, ...props } : Props) {
    return (
        <Layout>{children}
            <HeaderTemplate>
            </HeaderTemplate>

            <ResetBox>
                <PrimeText>이메일 인증 확인</PrimeText>
                <TextBoxA>
                    <TextA>siso1210@naver.com</TextA>
                </TextBoxA>
                <TextB>인증이 완료되지 않았습니다.</TextB>
                <TextC>프라임 서비스 이용을 위해 인증 메일을 꼭 확인해주세요.</TextC>
                <TextBoxB>
                    <TextD>인증 메일을 받지 못하셨나요?</TextD>
                    <LinkA>인증 메일 발송</LinkA>
                </TextBoxB>
                <TextBoxC>
                    <TextD>인증 확인을 완료하셨나요?</TextD>
                    <LinkA>로그인</LinkA>
                </TextBoxC>
            </ResetBox>
        </Layout>
    );
}

export default EmailAuth;