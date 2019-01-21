import React, { Component } from 'react'
import styled from 'styled-components';

import DescriptionPage from './DescriptionPage';

const HalfScreen = styled.div`
    width: 50vw;
    height: 100vh;
`;

export default class WelcomePage extends Component {
    public render() {
        return (
        <HalfScreen>
            <DescriptionPage />
        </HalfScreen>
        )
    }
}
