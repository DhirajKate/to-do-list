import React, { Component } from 'react';

class PendingTaskList extends Component {
    render() {
        let pendingTaskPresent = false;
        return (
            <div>
                <p>Tasks to do</p>
                <ul className="list-group">
                    {this.props.items.map((item, index) => {
                        if (item.status == '' || item.status == undefined) {
                            pendingTaskPresent = true;
                            return (
                                <li className='list-item' key={item.key}>{item.text}
                                    <button className='done-button' onClick={() => { this.props.doneTask(index) }}>Done</button>
                                </li>
                            )
                        }
                    })
                    }

                    {
                        !pendingTaskPresent ? <li className='list-item'>No More tasks today</li> : ''
                    }

                </ul>
            </div>
        );
    }
}

export default PendingTaskList;
