import React from 'react';
import { LoginPanel } from '../components/welcomePage/LoginPanel';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

describe('Login Panel', () => {
   let wrapper;
   // let middlewares;
   // let mockStore;
   
   const setup = () => {
      const utils = render(<LoginPanel />);
      const passwordInput = utils.getByPlaceholderText('Password');
      const loginInput = utils.getByPlaceholderText('Phone, email, or username');
      return {
         passwordInput,
         loginInput,
         ...utils
      };
   };

   afterEach(cleanup);

   beforeEach(() => {
      wrapper = renderer.create(<LoginPanel login="admin" password="password" />);
      // middlewares = [];
      // mockStore = configureStore(middlewares);
   });

   it('should render as expected', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
   });

   describe('on password input value change', () => {
      it('password value should change', () => {
         const { passwordInput } = setup();
         const expectedValue = 'PasswordTest';

         fireEvent.change(passwordInput, { target: { value: expectedValue}});
         
         expect(passwordInput.value).toBe(expectedValue);
      });
   });

   describe('on login input value change', () => {
      it('login value should change', () => {
         const { loginInput } = setup();
         const expectedValue = 'LoginTest';

         fireEvent.change(loginInput, { target: { value: expectedValue}});

         expect(loginInput.value).toBe(expectedValue);
      });
   });


   // describe('handleLoginChange', () => {
   //    it('should dispatch proper action', () => {
   //       console.log(wrapper.find('button'));
   //       expect(wrapper.find('button')).to.have.lengthOf(2);
   //    });
   // });
   // describe('on password input value change', () => {
   //    it('should dispatch proper action', () => {
   //       const initialState = {};
   //       const store = mockStore(initialState);
   //       const event = jest.fn();
   //       const changePassword = () => ({type: 'CHANGE_PASSWORD', payload: event});


   //       expect(wrapper.find('input')).toHaveLength(2);
   //       // store.dispatch(changePassword(event));

   //       // const actions = store.getActions();
   //       // const expectedPayload = {type: 'CHANGE_PASSWORD', payload: event};
   //       // expect(actions[0]).toEqual(expectedPayload);
   //    });
   // });

});

// Znajdz input, zapelnij go, sprawdz czy zdispatchowalo odpowiednia akcje

///  Zastapic enzyme react-testing-library

