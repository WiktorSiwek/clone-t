import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { changePassword, changeLogin } from '../user/userActions';
import store from '../rootState/rootStore';

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

export function LoginPanel(props) {
   const { login, password } = props;

   const handleLoginChange = event => {
      store.dispatch(changeLogin(event));
   };

   const handlePasswordChange = event => {
      store.dispatch(changePassword(event));
   };

   const handleLogIn = () => {
      // eslint-disable-next-line no-console
      console.log(`Zalogowano ${login} - ${password}`);
   };
   return (
      <ContainerRow>
         <LoginInput type="text" placeholder="Phone, email, or username" value={login} onChange={handleLoginChange} />
         <ContainerColumn>
            <LoginInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <ForgotenPasswordLink href="/begin_password_reset">Forgot password?</ForgotenPasswordLink>
         </ContainerColumn>
         <LogInButton onClick={handleLogIn}>Log in</LogInButton>
      </ContainerRow>
   );
}

const mapStateToProps = (state) => {
   const { login, password } = state.userState;
   return {
      login,
      password
   };
};

export default withRouter(connect(
   mapStateToProps,
)(LoginPanel));

