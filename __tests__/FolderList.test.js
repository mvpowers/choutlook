import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FolderList from '../src/components/FolderList';

Enzyme.configure({ adapter: new Adapter() });

describe('Folder', () => {
  it('should be defined', () => {
    expect(FolderList).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<FolderList />);
    expect(tree).toMatchSnapshot();
  });
});
