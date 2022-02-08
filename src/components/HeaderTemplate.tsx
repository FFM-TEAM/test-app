import React from 'react';
import styled from "styled-components";

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
top: 34.89%;
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


function HeaderTemplate({ children, ...props } : Props) {
    return (
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

            
    );
}

export default HeaderTemplate;