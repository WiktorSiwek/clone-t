import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from './layout/Layout';

const Container = styled.div`
  height: 100vh;
  background-color: #1DA1F2;
`;

class App extends Component {
  public render() {
    return (
      <Container>
        <Layout />
      </Container>
    );
  }
}

export default App;
