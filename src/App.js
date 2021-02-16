import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  width: 150px;
  height: 150px;
  margin: 100px;
  background: ${(props) => props.theme.primaryColor};
`;

export const App = (props) => {
  return (
    <>
      <MyDiv>hello</MyDiv>
    </>
  );
};
