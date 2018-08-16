import React from 'react';
import {EditProfile} from './edit-profile';
import { shallow, mount } from 'enzyme';
import Test from './setupTests';

describe('<EditProfile />', () => {
  it('Should render without crashing', () => {
    // smoke test
    const mocks = jest.fn()
    const wrapper = shallow(<EditProfile userId={mocks}/>);
    console.log(wrapper.debug());
  })
})