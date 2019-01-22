import React, { Component } from 'react'
import styled from 'styled-components';

import DescriptionPage from './DescriptionPage';
import RegistryAndLoginPage from './RegistryAndLoginPage';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

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
            <Container>
                <HalfScreen>
                    <Center>
                        <DescriptionPage />
                    </Center>
                </HalfScreen>
                <HalfScreen>
                    <RegistryAndLoginPage />
                </HalfScreen>
            </Container>
        )
    }
}
