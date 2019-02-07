import React from 'react';
import { shallow } from 'enzyme';
import { LoginPanel } from '../components/welcomePage/LoginPanel';

describe('Login Panel', () => {
   it('should render as expected', () => {
      const wrapper = shallow(
         <LoginPanel />
      );

      expect(wrapper.debug()).toMatchSnapshot();
   });
});