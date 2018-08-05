import React, { Component } from "react";
import TaskInputComponent from './task-input-component';
import PendingTaskList from './pending-task-list';
import CompletedTaskList from './completed-task-list';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("to-do-list") == null) {
            this.state = {
                items: []
            };

            localStorage.setItem("to-do-list", JSON.stringify([]));

        } else {
            console.log(localStorage.getItem("to-do-list"))
            this.state = {
                items: JSON.parse(localStorage.getItem("to-do-list"))
            }
        }


        this.addItem = this.addItem.bind(this);
        this.doneItem = this.doneItem.bind(this);
    }


    doneItem(index) {
        let items = JSON.parse(localStorage.getItem("to-do-list"));
        items[index].status = "completed";
        localStorage.setItem("to-do-list", JSON.stringify(items));
        this.setState({
            items: items
        });
    }

    componentWillReceiveProps() {
        this.setState({ items: [] })
    }


    addItem(task) {
       
        var newItem = {
            text: task,
            key: Date.now(),
            status: ''
        };

        let items = [];
        items = JSON.parse(localStorage.getItem("to-do-list"));
        items.push(newItem);

        items.sort(function (a, b) {
            return new Date(b.key) - new Date(a.key);
        });
        localStorage.setItem("to-do-list", JSON.stringify(items));
        this.setState({
            items
        });
    }

    render() {
    
        return (
            <div className="container">
                <TaskInputComponent addItem={this.addItem} />
               <PendingTaskList items = {this.state.items} doneTask = {this.doneItem}/>
                <div className='divider'></div>
               <CompletedTaskList items = {this.state.items}/>
            </div>
        );
    }
}

export default ToDoContainer;