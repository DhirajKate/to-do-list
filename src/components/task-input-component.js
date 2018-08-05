import React, { Component } from 'react';

class TaskInputComponent extends Component {
    constructor() {
        super();
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value != '') {
            this.props.addItem(this._inputElement.value);
            this._inputElement.value = "";
        }
        e.preventDefault();
    }
    render() {
        return (
            <div className="input-area">
                    <input ref={(a) => this._inputElement = a}
                        placeholder="Enter task">
                    </input>
                    <button onClick={this.addItem}>+</button>
            </div>
        );
    }
}

export default TaskInputComponent;
