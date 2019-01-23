import React from 'react';
import styled from 'styled-components';

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding-top: 30px;
`;

const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginInput = styled.input`
    width: 200px;
    padding: 12px;
    box-sizing: border-box;
    margin-right: 20px;
`;

const ForgotenPasswordLink = styled.a`
    text-decoration: none;
    color: #aab8c2;
    font-size: 14px;
`;

const LogInButton = styled.button`
    height: 42px;
    color: #1da1f2;
    background-color: #ffffff;
    padding: 12px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 30px;
    border-style: solid;
    border-color: #1da1f2;
    border-width: 1px;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #eaf5fd;
    }
`;


export default class LoginPanel extends React.Component {
    public render() {
        return (
            <ContainerRow>
                    <LoginInput type="text" placeholder="Phone, email, or username" />
                    <ContainerColumn>
                        <LoginInput type="password" placeholder="Password" />
                        <ForgotenPasswordLink href="/begin_password_reset">Forgot password?</ForgotenPasswordLink>
                    </ContainerColumn>
                    <LogInButton>Log in</LogInButton>
            </ContainerRow>
        )
    }
}
