import { faComment, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  line-height: 400%;
  margin: auto;
  width: 400px;
  padding: 30vh;
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
`;

const Icon = styled.span`
  font-size: 28px;
`;


export default function DescriptionPage() {
  return (
    <Container>
      <Column>
        <Icon>
          <FontAwesomeIcon icon={faSearch} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faUsers} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faComment} />
        </Icon>
      </Column>
      <Column>
        <Text>Obserwuj to, co Cię interesuje</Text>
        <Text>Dowiedz się, o czym rozmawiają inni.</Text>
        <Text>Dołącz do rozmowy.</Text>
      </Column>
    </Container>
  )
}

