import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../src/components/Message';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
  const handleChange = jest.fn();
  it('should be defined', () => {
    expect(Navbar).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Navbar password="password" handleChange={handleChange} />
    );
    expect(tree).toMatchSnapshot();
  });
});
