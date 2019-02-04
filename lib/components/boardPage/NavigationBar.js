import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #fff;
    height: 46px;
    border-bottom: 1px solid rgba(0,0,0,0.25);
    position: relative;
    width: 100%;
`;

const Navigation = styled.div`

`;

export default function NavigationBar() {
   return (
      <Container>
         <Navigation>
          Ta
         </Navigation>
      </Container>
   );
}
