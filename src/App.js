import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    state = {
        tasks: [
            {id: 1, title: ' JS', isDone: false, priority: ' -high'},
            {id: 2,title: ' Python', isDone: false, priority: ' -low'},
            {id: 3,title: ' Java', isDone: true, priority: ' -high'},
            {id: 4,title: ' C++', isDone: true, priority: ' -low'}
        ],

        filterValue: "All"
    };

    nextTaskId=5;

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    };

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: ' -low',
            id: this.nextTaskId
        };
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    };
    changeStatus = (status, taskId) => {
        let tasksCopy = this.state.tasks.map(t => {
            if (t.id == taskId) {
                return {...t, isDone: status};
            }
            return t;
        });
        this.setState({
            tasks: tasksCopy
        });
    }

    changeTitle = (title, taskId) => {
        let tasksCopy = this.state.tasks.map(t => {
            if (t.id == taskId) {
                return {...t, title: title};
            }
            return t;
        });
        this.setState({
            tasks: tasksCopy
        });
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        tasks={this.state.tasks.filter(t => {
                            switch (this.state.filterValue) {
                                case 'All':
                                    return true;
                                case 'Completed':
                                    return t.isDone;
                                case 'Active':
                                    return !t.isDone;
                                default:
                                    return true;
                            }
                        })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

