import { faDove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
  margin: auto;
  margin-bottom: 45vh;
`;

const Icon = styled.i`
  color: #1da1f2;
  font-size: 45px;
  margin-bottom: 8px;
  `;

const Header = styled.h1`
  font-size: 27px;
  line-height: 32px;
  font-weight: bold;
  `;

const Text = styled.h2`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 350px;
  border-radius: 100px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 6px 16px;
  text-align: center;
  outline: none;
  box-shadow: none;
  border-style: solid;
  border-width: 1px;
  border-color: #1da1f2;
  margin-top: 16px;
`;

const SingUpButton = styled(Button)`
  color: #ffffff;
  background-color: #1B95E0;
  &:hover {
    background-color: #006DBF;
  }
  `;

const LogInButton = styled(Button)`
  color: #1b95e0;
  background-color: #ffffff;
  &:hover {
    background-color: #eaf5fd;
  }
`;

export default function RegisterPanel() {
  return (
    <ContainerColumn>
      <Icon className="Icon Icon--bird" />
      <Header>See what's happening in the world right now</Header>
      <Text>Join Twitter today.</Text>
      <SingUpButton>Sign Up</SingUpButton>
      <LogInButton>Log In</LogInButton>
    </ContainerColumn>
  )
}
