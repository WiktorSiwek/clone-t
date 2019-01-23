import React from 'react'
import styled from 'styled-components';
import LoginPanel from './LoginPanel';
import RegisterPanel from './RegisterPanel';

const Container = styled.div`
    background-color: #ffffff;
    height: 100%;
`;

export default function RegistryAndLoginPage() {
  return (
    <Container>
      <LoginPanel />
      <RegisterPanel />
    </Container>
  )
}
