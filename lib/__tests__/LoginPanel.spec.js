import React from 'react';
import { LoginPanel } from '../components/welcomePage/LoginPanel';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

describe('Login Panel', () => {
   let wrapper;
   let middlewares;
   let mockStore;
   
   beforeEach(() => {
      // wrapper = shallow(<LoginPanel login="admin" password="password" />); //w enzyme 3 juz nie ma snpashotow
      wrapper = renderer.create(<LoginPanel login="admin" password="password" />);
      middlewares = [];
      mockStore = configureStore(middlewares);
   });

   it('should render as expected', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
   });

   // describe('handleLoginChange', () => {
   //    it('should dispatch proper action', () => {
   //       console.log(wrapper.find('button'));
   //       expect(wrapper.find('button')).to.have.lengthOf(2);
   //    });
   // });
   describe('handleLoginChange', () => {
      it('should dispatch proper action', () => {
         const initialState = {};
         const store = mockStore(initialState);
         const event = jest.fn();
         const changePassword = () => ({type: 'CHANGE_PASSWORD', payload: event});


         expect(wrapper.find('input')).toHaveLength(2);
         // store.dispatch(changePassword(event));

         // const actions = store.getActions();
         // const expectedPayload = {type: 'CHANGE_PASSWORD', payload: event};
         // expect(actions[0]).toEqual(expectedPayload);
      });
   });

});

// Znajdz input, zapelnij go, sprawdz czy zdispatchowalo odpowiednia akcje

///  Zastapic enzyme react-testing-library

