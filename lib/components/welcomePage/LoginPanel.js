import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding-top: 30px;
    padding-left: 140px;
    height: 10vh;
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

export default class LoginPanel extends Component {
   constructor(props) {
      super(props);

      this.state = {
         login: props.login || '',
         password: props.password || ''
      };
   }
   
   handlePasswordChange = (event) => {
      // eslint-disable-next-line no-console
      console.log('TCL: LoginPanel -> handlePasswordChange');
      this.setState({ password: event.target.value });
   }

   handleLoginChange = (event) => {
      // eslint-disable-next-line no-console
      console.log('TCL: LoginPanel -> handleLoginChange');
      this.setState({ login: event.target.value });
   }

   handleLogIn = () => {
      // eslint-disable-next-line no-console
      console.log(this.state.login, this.state.password);
   }

   render() {
      const { login, password } = this.state;
      return (
         <ContainerRow>
            <LoginInput type="text" placeholder="Phone, email, or username" value={login} onChange={this.handleLoginChange} />
            <ContainerColumn>
               <LoginInput type="password" placeholder="Password" value={password} onChange={this.handlePasswordChange} />
               <ForgotenPasswordLink href="/begin_password_reset">Forgot password?</ForgotenPasswordLink>
            </ContainerColumn>
            <LogInButton onClick={this.handleLogIn}>Log in</LogInButton>
         </ContainerRow>
      );
   }
}


