import React from 'react';
import LoginPage from './login-page';
import { shallow } from 'enzyme';
import Test from './setupTests';

describe('<LoginPage />', () => {
  it('Should render without crashing', () => {
    // smoke test
    const wrapper = shallow(<LoginPage />);
    // console.log(wrapper.debug());
  })
})

// input, output, & submission