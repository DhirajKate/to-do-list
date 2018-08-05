import React from 'react';
import { shallow ,mount} from 'enzyme';

import TaskInputComponent from './task-input-component';

describe('Task Input Component', () => {
    let taskInputComponent,
    mockAddItemFunction;

    beforeEach(() => {
        mockAddItemFunction = jest.fn();
        taskInputComponent = shallow(<TaskInputComponent addItem = {mockAddItemFunction}/>)
    });

    it('should render task input component', () => {
        expect(taskInputComponent.type()).toBe('div');
        expect(taskInputComponent.hasClass('input-area')).toBeTruthy();
        });

    it('should have input box to get item', () => {
        const inputElement = taskInputComponent.childAt(0);
        expect(inputElement.type()).toBe('input');
        expect(inputElement.prop('placeholder')).toBe('Enter task');
    });

    it('should have add button to add task', () => {
        const addTaskButton = taskInputComponent.childAt(1);
        expect(addTaskButton.type()).toBe('button');
        expect(addTaskButton.text()).toBe('+');
    });

    it('should not call addItem function which is passed as props when input text is empty', () => {
        taskInputComponent = mount(<TaskInputComponent addItem = {mockAddItemFunction}/>)
   
        const inputElement = taskInputComponent.childAt(0);
        const addTaskButton = taskInputComponent.find('button');

        addTaskButton.simulate('click');
        
        expect(mockAddItemFunction.mock.calls.length).toEqual(0);
    });

    it('should call addItem function which is passed as props when input text is not empty', () => {
       
        taskInputComponent = mount(<TaskInputComponent addItem = {mockAddItemFunction}/>)
        
   
        const inputElement = taskInputComponent.find('input');
        const addTaskButton = taskInputComponent.find('button');

        inputElement.simulate('keyDown', {which:'a'});
        addTaskButton.simulate('click');
        
        expect(mockAddItemFunction.mock.calls.length).toEqual(0);
    });
});