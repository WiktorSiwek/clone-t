import React from 'react';
import TestRenderer from 'react-test-renderer';
import DescriptionPage from '../components/welcomePage/DescriptionPage';

describe('Description Page', () => {
   it('renders as expected', () => {
      const tree = TestRenderer.create(<DescriptionPage />);

      expect(tree).toMatchSnapshot();
   });
});