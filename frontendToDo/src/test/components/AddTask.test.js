import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios'
import AddTask from '../../components/AddTask';

const setTodos = jest.fn()
const setBandReload = jest.fn()

jest.mock(('axios'), () => ({
  post: jest.fn()
}))

describe('tests in <AddTask/>', () => {

  const wrapper = shallow(<AddTask
    setTodos = {setTodos}
    user = {1}
    setBandReload = {setBandReload}
  />)

  it('should render the component correctly', () => {

    expect(wrapper).toMatchSnapshot();
    
  })

  it('should post the info and clean input', () => {
    const input  = wrapper.find('input')
    const value = 'testing'
    input.simulate('change', {target:{value}})

    wrapper.find('form').simulate('submit', {preventDefault(){}})

    expect(setTodos).toHaveBeenCalled()
    expect(setTodos).toHaveBeenCalledTimes(1)
    expect(axios.post).toHaveBeenCalled()

    const inputValue = input.prop('value')
    expect(inputValue).toBe('')
  })


})
