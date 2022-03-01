import React from 'react';
import styled from "styled-components";
import Layout from './common/Layout';
import HeaderTemplate from './HeaderTemplate';


const JoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    
    width: 600px;
    height: 500px;
`;


const PrimeText = styled.div`
    flex: 0.1;
    margin: 0 auto;
    

    font-family: SpoqaHanSans;
    font-weight: bold;
    font-size: 32px;
    line-height: 47px;
    letter-spacing: -0.05em;

    /* Onbg dark */

    color: #F4F5F6;
`;

const EditText = styled.div`
    margin: 0 auto;
    margin-top: 15px;
    width: 438px;
    height: 66px;
`;

const EditLabel = styled.label`

    font-family: SpoqaHanSans;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;

    color: #F4F5F6;

    flex: auto;
    order: 0;
    flex-grow: 0;
`;

const EditInput = styled.input`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    height: 38px;
    padding: 0 15px;

    background: #31343A;

    border: 1px solid #3B3E44;
    box-sizing: border-box;
    border-radius: 4px;
`;

const CheckBox = styled.div`
    flex: 1;
    width: 20px;
    height: 20px;
    
`;

const CheckText = styled.label`
    width: 408px;
    height: 20px;
    
    font-family: SpoqaHanSans;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: #F4F5F6;
`;

const Button = styled.div`
    margin: 0 auto;
    margin-top: 15px;
    width: 200px;
    height: 55px;

    background: #6C99F2;
    border-radius: 6px;
`;

const ButtonText = styled.div`

    margin: 0 auto;

    font-family: SpoqaHanSans;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.01em;

    color: #F4F5F6;
`;

//${Label}

const Input = styled.input`
//   &:checked +  {
//     background: blue;
//   }
background: #6C99F2;
border-radius: 3px;
`;

function Join() {
    return (
        <Layout>
            <HeaderTemplate>
            </HeaderTemplate>
            <JoinContainer>
                <PrimeText>회원가입</PrimeText>
                <EditText>
                    <EditLabel>이메일</EditLabel>
                    <EditInput placeholder={"이메일을 입력해주세요."}></EditInput>
                </EditText>
                <EditText>
                    <EditLabel>비밀번호</EditLabel>
                    <EditInput placeholder={"비밀번호를 입력해주세요."}></EditInput>
                </EditText>
                <EditText>
                    <EditLabel>비밀번호 확인</EditLabel>
                    <EditInput placeholder={"비밀번호를 다시 입력해주세요."}></EditInput>
                </EditText>

                <EditText>
                    <CheckBox><Input id="input" type="checkbox" /></CheckBox>
                    <CheckText>프라임 이용 약관 및 개인정보취급방침 에 모두 동의합니다.</CheckText>
                </EditText>

                <Button>
                    <ButtonText>이메일 인증</ButtonText>
                </Button>

            </JoinContainer>


        </Layout>
    );
}

export default Join;