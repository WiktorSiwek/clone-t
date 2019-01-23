import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E6ECF0;
    height: 100%;
    width: 100%;
`;

export default function BoardPage() {
  return (
    <Container>
        <NavigationBar />
    </Container>
  )
}
