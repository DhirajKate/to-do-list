import React from 'react';
import { shallow} from 'enzyme';

import ToDoContainer from './to-do-container';
import TaskInputComponent from './task-input-component';
import PendingTaskList from './pending-task-list';
import CompletedTaskList from './completed-task-list';

describe('ToDo Container', () => {
    let todoContainer;

    beforeEach(() => {
        todoContainer = shallow(<ToDoContainer/>);
    });

    it('should render todo container', () => {
        expect(todoContainer.type()).toBe('div');
        expect(todoContainer.hasClass('container')).toBeTruthy();
    });

    it('should display task input component', () => {
        const taskInputComponent = todoContainer.childAt(0);

        expect(taskInputComponent.type()).toBe(TaskInputComponent);
        expect(taskInputComponent.prop('addItem')).toEqual(todoContainer.instance().addItem)
    });

    it('should display pending task list component', () => {
        const pendingListComponent = todoContainer.childAt(1);

        expect(pendingListComponent.type()).toBe(PendingTaskList);
        expect(pendingListComponent.prop('items')).toEqual(todoContainer.state().items)
        expect(pendingListComponent.prop('doneTask')).toEqual(todoContainer.instance().doneItem)
    });
    it('should display divider line component', () => {
        const dividerComponent = todoContainer.childAt(2);

        expect(dividerComponent.type()).toBe('div');
        expect(dividerComponent.hasClass('divider')).toBeTruthy();
    });
    it('should display task input component', () => {
        const completedTaskComponent = todoContainer.childAt(3);

        expect(completedTaskComponent.type()).toBe(CompletedTaskList);
        expect(completedTaskComponent.prop('items')).toEqual(todoContainer.state().items);
    });
});