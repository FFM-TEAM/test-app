// @flow
import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Conatiner = styled.div`
    font-size: 1rem;
    display: flex;
    
`;

function Typo({style, children} : Props) {
    return <Conatiner style={style}>{children}</Conatiner>;
}
export default Typo;