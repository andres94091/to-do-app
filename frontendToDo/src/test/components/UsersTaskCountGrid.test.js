import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';
import UsersTaskCountGrid from '../../components/UsersTaskCountGrid';

describe('tests in <UsersTaskCountGrid/>', () => {

  const wrapper = shallow(<UsersTaskCountGrid
    bandReload = {true}
  />)

  it('should render the component correctly', () => {

    expect(wrapper).toMatchSnapshot();
  })
  
  
})
