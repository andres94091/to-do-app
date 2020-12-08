import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';
import SearchUser from '../../components/SearchUser';

const setUserHook = jest.fn();

describe('test in <SearchUser/>', () => {

  const wrapper = shallow(<SearchUser
    setUserHook = {setUserHook}
  />)

  it('should render the component correctly', () => {

    expect(wrapper).toMatchSnapshot();

  })
  
  
})
