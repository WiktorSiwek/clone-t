import React from 'react';
import DescriptionPage from '../components/welcomePage/DescriptionPage';
import { shallow } from 'enzyme';

describe('Description Page', () => {
   it('renders as expected', () => {
      const wrapper = shallow(<DescriptionPage />);

      expect(wrapper.debug()).toMatchSnapshot();
   });
});