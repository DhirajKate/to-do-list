import React from 'react';
import { shallow } from 'enzyme';

import CompletedTaskList from './completed-task-list';

describe('Completed Task List',()=>{
    let completedTaskListComponent,
    mockItems;
    beforeEach(()=>{
        mockItems = [{
            text:"sample",
            key: Date.now(),
            status:''
        },{
            text:"sample-completed",
            key: Date.now(),
            status:'completed'
        }]

        completedTaskListComponent = shallow(<CompletedTaskList items = {mockItems}/>)
    })

    it('should render completed task list component',()=>{
        expect(completedTaskListComponent.type()).toEqual('div');
    });

    describe('list label component',()=>{
        it('should display completed task list label as Done task',()=>{
            const labelComponent = completedTaskListComponent.childAt(0);
            
            expect(labelComponent.type()).toEqual('p')
            expect(labelComponent.text()).toBe('Done tasks')
        })
    });

    describe('Completed task items list when completed item is present',()=>{
        let listComponent;
      beforeEach(() => {
          listComponent = completedTaskListComponent.childAt(1);
      });

      it('should display completed item', () => {
              const completeditem = listComponent.children();
              expect(completeditem.type()).toBe('li');
              expect(completeditem.hasClass('list-item')).toBeTruthy();
              expect(completeditem.text()).toBe('sample-completed');
      });   
    });

    describe('Empty task list message component when completed item is not present',()=>{
        let listComponent;
      beforeEach(() => {
        mockItems = [{
            text:"sample",
            key: Date.now(),
            status:''
        }]

        completedTaskListComponent = shallow(<CompletedTaskList items = {mockItems}/>)
        listComponent = completedTaskListComponent.childAt(1);
      });

      it('should display empty task list message', () => {
              const emptyTaskMessageComponent = listComponent.children();
              expect(emptyTaskMessageComponent.type()).toBe('li');
              expect(emptyTaskMessageComponent.hasClass('list-item')).toBeTruthy();
              expect(emptyTaskMessageComponent.text()).toBe('Your task list is empty');
      });   
    });
})

