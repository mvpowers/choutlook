import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageList from '../src/components/MessageList';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageList', () => {
  it('should be defined', () => {
    expect(MessageList).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <MessageList
        displayMsg={[{ time: 'time', user: 'user', message: 'message' }]}
        replyFocus={false}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
