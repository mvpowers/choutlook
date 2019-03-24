import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FolderSection from '../src/components/FolderSection';

Enzyme.configure({ adapter: new Adapter() });

describe('FolderSection', () => {
  it('should be defined', () => {
    expect(FolderSection).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<FolderSection name="test" />);
    expect(tree).toMatchSnapshot();
  });
});
