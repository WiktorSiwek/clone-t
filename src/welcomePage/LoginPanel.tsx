import React from 'react';
import styled from 'styled-components';
import { initialUserState } from '../user/userState';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { IRootState } from '../rootState/IRootState';

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding-top: 30px;
    padding-left: 140px;
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
    font-size: 14px;
    border-radius: 30px;
    border-style: solid;
    border-color: #1da1f2;
    border-width: 1px;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #eaf5fd;
    }
`;


class LoginPanel extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    public handleLoginChange: any = (event: any) => {
        this.setState({login: event.target.value});
    }

    public handlePasswordChange: any = (event: any) => {
        this.setState({password: event.target.value});
    }

    public render() {
        return (
            <ContainerRow>
                <LoginInput type="text" placeholder="Phone, email, or username" value={this.state.login} onChange={this.handleLoginChange} />
                <ContainerColumn>
                    <LoginInput type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}  />
                    <ForgotenPasswordLink href="/begin_password_reset">Forgot password?</ForgotenPasswordLink>
                </ContainerColumn>
                <LogInButton>Log in</LogInButton>
            </ContainerRow>
        )
    }
}

const mapStateToProps = (state: IRootState, ownProps: any) => {
    return {
        
    }
}

export default withRouter(connect(
    mapStateToProps
)(LoginPanel));

