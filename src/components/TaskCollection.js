import React, { Component} from "react";
import TaskCard from './TaskCard';

class TaskCollection extends Component {
    render() {
        return (
            <div className="grid">
                <div className="row">
                    {this.props.tasks.map((task) => (
                        <TaskCard 
                            key={task.id} 
                            task={task} 
                            categories={this.props.categories} 
                            updateTask={this.props.updateTask}
                            deleteTask={this.props.deleteTask}
                            volunteerForTask={this.props.volunteerForTask}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default TaskCollection;