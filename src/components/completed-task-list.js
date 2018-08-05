import React, { Component } from 'react';

class CompletedTaskList extends Component {
    render() {
        let completedTaskPresent = false;
        return (
            <div>
               <p>Done tasks</p>
                <ul className="list-group">

                    {
                        this.props.items.map((item) => {
                            if (item.status == 'completed') {
                                completedTaskPresent = true;
                                return (
                                    <li className='list-item' key={item.key}>{item.text}
                                    </li>
                                )
                            }
                        })}
                    {
                        !completedTaskPresent ? <li className='list-item'>Your task list is empty</li> : ''
                    }

                </ul>
            </div>
        );
    }
}

export default CompletedTaskList;
