import React from 'react';
import { shallow } from 'enzyme';
import { LoginPanel } from '../components/welcomePage/LoginPanel';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import UserActionTypes from '../components/user/userActions';

describe('Login Panel', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<LoginPanel />);
   });

   it('should render as expected', () => {
      expect(wrapper.debug()).toMatchSnapshot();
   });

   it('on handleLoginChange should dispatch changeLogin action', () => {
      const middlewares = [thunk];
      const mockStore = configureStore(middlewares);
      const expectedAction = {
         payload: 'Login',
         type: UserActionTypes.CHANGE_LOGIN
      };
      // wrapper.setProps({login: 'Login', password: 'Password'});

      const store = mockStore({login: 'Login', password: 'Password'});

      wrapper.handleLoginChange(null);
      
   });
});