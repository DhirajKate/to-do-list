import React from 'react';
import { shallow } from 'enzyme';

import PendingTaskList from './pending-task-list';

describe('Pending Task List', () => {
    let pendingTaskListComponent,
        mockItems,
        mockDoneTaskFunction;
    beforeEach(() => {
        mockItems = [{
            text: "sample",
            key: Date.now(),
            status: ''
        }, {
            text: "sample-completed",
            key: Date.now(),
            status: 'completed'
        }]

        mockDoneTaskFunction = jest.fn();

        pendingTaskListComponent = shallow(<PendingTaskList items={mockItems} doneTask={mockDoneTaskFunction} />)
    })

    it('should render pending task list component', () => {
        expect(pendingTaskListComponent.type()).toEqual('div');
    });

    describe('list label component', () => {
        it('should display completed task list label as Done task', () => {
            const labelComponent = pendingTaskListComponent.childAt(0);

            expect(labelComponent.type()).toEqual('p');
            expect(labelComponent.text()).toBe('Tasks to do');
        })
    });

    describe('Pending task items list when pending item is present', () => {
        let listComponent;
        beforeEach(() => {
            listComponent = pendingTaskListComponent.childAt(1);
        });

        it('should display pending item with item text', () => {
            const pendingItem = listComponent.children();
            expect(pendingItem.type()).toBe('li');
            expect(pendingItem.hasClass('list-item')).toBeTruthy();
            expect(pendingItem.childAt(0).text()).toBe('sample');
        });

        it('should display done button', () => {
            const pendingItem = listComponent.children();

            expect(pendingItem.childAt(1).type()).toBe('button');
            expect(pendingItem.childAt(1).hasClass('done-button')).toBeTruthy();
            expect(pendingItem.childAt(1).text()).toBe('Done');
        });

        it('should call done task function which is passed as props', () => {
            const pendingItem = listComponent.children();

            pendingItem.childAt(1).simulate('click')
            expect(mockDoneTaskFunction.mock.calls.length).toEqual(1);
        });
    });

    describe('Empty task list message component when pending item is not present', () => {
        let listComponent;
        beforeEach(() => {
            mockItems = [{
                text: "sample",
                key: Date.now(),
                status: 'completed'
            }]

            pendingTaskListComponent = shallow(<PendingTaskList items={mockItems} />)
            listComponent = pendingTaskListComponent.childAt(1);
        });

        it('should display empty task list message', () => {
            const emptyTaskMessageComponent = listComponent.children();
            expect(emptyTaskMessageComponent.type()).toBe('li');
            expect(emptyTaskMessageComponent.hasClass('list-item')).toBeTruthy();
            expect(emptyTaskMessageComponent.text()).toBe('No More tasks today');
        });
    });
})

