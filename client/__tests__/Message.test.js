import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../src/components/Message';

Enzyme.configure({ adapter: new Adapter() });

describe('Message', () => {
  it('should be defined', () => {
    expect(Message).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Message user="user" msg="msg" />);
    expect(tree).toMatchSnapshot();
  });
});
