import React from 'react';
import styled from 'styled-components';
import LoginPanel from './LoginPanel';
import RegisterPanel from './RegisterPanel';

const Container = styled.div`
    background-color: #ffffff;
    /* height: 100vh; */
    height:100%;
`;

const Center = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: calc(90vh - 30px);
`;

function RegistryAndLoginPage() {
   return (
      <Container>
         <LoginPanel />
         <Center>
            <RegisterPanel />
         </Center>
      </Container>
   );
}

export default RegistryAndLoginPage;
