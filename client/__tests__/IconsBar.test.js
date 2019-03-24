import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconsBar from '../src/components/IconsBar';

Enzyme.configure({ adapter: new Adapter() });

describe('IconsBar', () => {
  it('should be defined', () => {
    expect(IconsBar).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<IconsBar />);
    expect(tree).toMatchSnapshot();
  });
});
