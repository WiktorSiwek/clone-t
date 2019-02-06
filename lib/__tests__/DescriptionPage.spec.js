import React from 'react';
import renderer from 'react-test-renderer';
import DescriptionPage from '../components/welcomePage/DescriptionPage';

describe('DescriptionPage', () => {
   it('renders as expected', () => {
      const tree = renderer.create(<DescriptionPage />);

      expect(tree).toMatchSnapshot();
   });
});