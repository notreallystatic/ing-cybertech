import React from 'react';
import styled from 'styled-components';
import {primaryFont, typeScale} from '../../utils';

export const Button = styled.button`

  border-radius: 10%;
  display: block;
  left: 50%;
  top; 50%;
  tex-docration:none;  
  position: relative
  padding: 20px;
  width: 200px;
  text-align:center;
  font-size:22px;
  background:linear-gradient(to right,red 50%, green 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transiation-duration: 0.4s;
  cursor: pointer;
  
  
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  &:hover {
    background-position: left bottom;
    display: inline-block;
    position: fixed;
    transition-duration: 0.3s;
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    console.log(background-color)

  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    background-color: blue;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  background: none;
  color: ${(props) => props.theme.primaryColor};
  &:disabled {
    background: none;
    border: 2px solid ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  &:hover {
    border: 2px solid ${(props) => props.theme.primaryHoverColor};
  }
  &:active {
    border: 2px solid ${(props) => props.theme.primaryActiveColor};
  }
`;