import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FolderLink from '../src/components/FolderLink';

Enzyme.configure({ adapter: new Adapter() });

describe('FolderLink', () => {
  it('should be defined', () => {
    expect(FolderLink).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<FolderLink name="test" />);
    expect(tree).toMatchSnapshot();
  });
});
