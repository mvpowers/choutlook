import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewMessageBar from '../src/components/NewMessageBar';

Enzyme.configure({ adapter: new Adapter() });

describe('NewMessageBar', () => {
  it('should be defined', () => {
    expect(NewMessageBar).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<NewMessageBar />);
    expect(tree).toMatchSnapshot();
  });
});
