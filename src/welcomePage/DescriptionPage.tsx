import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  line-height: 400%;
  min-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 17px;
  font-weight: bold;
  padding-left: 15px;
  padding-top: 5px;
`;

const Icon = styled.span`
  font-size: 35px;
`;


function DescriptionPage() {
  return (
    <Container>
      <Column>
        <Icon>
          <i className="Icon Icon--search" />
        </Icon>
        <Icon>
          <i className="Icon Icon--people" />
        </Icon>
        <Icon>
          <i className="Icon Icon--reply" />
        </Icon>
      </Column>
      <Column>
        <Text>Follow your interests.</Text>
        <Text>Hear what people are talking about.</Text>
        <Text>Join the conversation.</Text>
      </Column>
    </Container>
  )
}

export default DescriptionPage;

