import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reply from '../src/components/Reply';

Enzyme.configure({ adapter: new Adapter() });

describe('Reply', () => {
  const toggleEditUsername = jest.fn();
  const handleChange = jest.fn();
  const submitSendMsg = jest.fn();
  const discardSendMsg = jest.fn();
  const submitOnEnter = jest.fn();
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();

  it('should be defined', () => {
    expect(Reply).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Reply
        sendMsg="sendMsg"
        username="username"
        editingUsername={false}
        toggleEditUsername={toggleEditUsername}
        handleChange={handleChange}
        submitSendMsg={submitSendMsg}
        discardSendMsg={discardSendMsg}
        submitOnEnter={submitOnEnter}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
