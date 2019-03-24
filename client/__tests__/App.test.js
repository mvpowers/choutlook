import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
