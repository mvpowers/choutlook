import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VisibilityTitle from '../src/components/VisibilityTitle';

Enzyme.configure({ adapter: new Adapter() });

describe('VisibilityTile', () => {
  it('should be defined', () => {
    expect(VisibilityTitle).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<VisibilityTitle />);
    expect(tree).toMatchSnapshot();
  });
});
