import React from 'react';
import styled from 'styled-components';
// import '../node_modules/edgeicons/css/ei.css';
import '../../node_modules/edgeicons/css/ei.css';

import Layout from './layout/Layout';

const Container = styled.div`
  height: 100vh;
  background-color: #1DA1F2;
  font-family: "TwitterFont",Arial,sans-serif;
`;

class App extends React.Component {
   render() {
      return (
         <Container>
            <Layout />
         </Container>
      );
   }
}

export default App;
