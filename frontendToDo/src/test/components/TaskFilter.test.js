import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';
import TaskFilter from '../../components/TaskFilter';

const setFilterStatus = jest.fn()

describe('tests in <TaskFilter/>', () => {

  const wrapper = shallow(<TaskFilter
    setFilterStatus= {setFilterStatus}
  />)

  it('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the filter status for tasks', () => {

    wrapper.find('form').simulate('change', {target:{value:'null'}})

    expect(setFilterStatus).toHaveBeenCalled()
  })
  
  
  
  
})






