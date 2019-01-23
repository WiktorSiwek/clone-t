import { faDove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function RegisterPanel() {
  return (
    <div>
        <i className="Icon Icon--bird" />
        <p>See what's happening in the world right now</p>
        <p>Join Twitter today.</p>
    </div>
  )
}
