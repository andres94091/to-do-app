import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';

import Task from '../components/task';

describe('tests in component Task', () => {
    
    test('should render the component correctly', () => {

        const todo = {task: 'test task', status: false, user_id: 1}
        const wrapper = shallow(<Task todo={todo} index ={0} />)

        expect(wrapper).toMatchSnapshot();
        
    })
})
