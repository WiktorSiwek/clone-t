import React, { Component } from 'react'
import styled from 'styled-components';

import DescriptionPage from './DescriptionPage';

const HalfScreen = styled.div`
    width: 50vw;
    height: 100vh;
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export default class WelcomePage extends Component {
    public render() {
        return (
            <HalfScreen>
                <Center>
                    <DescriptionPage />
                </Center>
            </HalfScreen>
        )
    }
}
