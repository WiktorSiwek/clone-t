import React from 'react';
import LoginPanel from '../components/welcomePage/LoginPanel';
import renderer from 'react-test-renderer';
// import { render, fireEvent, cleanup } from 'react-testing-library';

describe('Login Panel', () => {
   let wrapper;
   let instance;
   
   // const setup = () => {
   //    const utils = render(<LoginPanel />);
   //    const passwordInput = utils.getByPlaceholderText('Password');
   //    const loginInput = utils.getByPlaceholderText('Phone, email, or username');

   //    return {
   //       passwordInput,
   //       loginInput,
   //       ...utils
   //    };
   // };

   // afterEach(cleanup);

   beforeEach(() => {
      wrapper = renderer.create(<LoginPanel />);
      instance = wrapper.getInstance();
   });

   it('should render as expected', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
   });

   it('when no props given, state should consist of empty strings', () => {
      wrapper = renderer.create(<LoginPanel />);
      instance = wrapper.getInstance();

      expect(instance.state).toEqual({ login: '', password: '' });
   });

   it('when props given, state should be equal to them', () => {
      wrapper = renderer.create(<LoginPanel login="Login" password="Password" />);
      instance = wrapper.getInstance();

      expect(instance.state).toEqual({ login: 'Login', password: 'Password' });
   });

   describe('handlePasswordChange', () => {
      it('should change state', () => {
         instance.handlePasswordChange({target: {value: 'Test'}});

         expect(instance.state.password).toEqual('Test');
      });
   });

   describe('handleLoginChange', () => {
      it('shoudl change state', () => {
         instance.handleLoginChange({target: {value: 'Test'}});

         expect(instance.state.login).toEqual('Test');
      });
   });

});

