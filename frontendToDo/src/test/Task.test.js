import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';

import Task from '../components/task';

describe('tests in component Task', () => {

    const todo = { id: 1, task: 'test task', status: false, user_id: 1 }
    const wrapper = shallow(<Task
        todo={todo} 
        index={0}
        completeTodos = {(index) => console.log(index)} 
        setBandReload = {(index) => console.log(index)} 

    />)

    test('should render the component correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })

    // test('should change the state of component prop status', () => {

    //     wrapper.find('button').simulate('click')
    //     const statusComponen = wrapper.props().style.textDecoration
    //     expect(statusComponen).toBe('line-through')
    // })

})
