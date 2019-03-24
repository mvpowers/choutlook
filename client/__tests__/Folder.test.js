import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Folder from '../src/components/Folder';

Enzyme.configure({ adapter: new Adapter() });

describe('Folder', () => {
  it('should be defined', () => {
    expect(Folder).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Folder name="test" icon={{ props: { size: 16 } }} />);
    expect(tree).toMatchSnapshot();
  });
});
