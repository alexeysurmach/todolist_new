import React from 'react'

class TodoListHeader extends React.Component {
    state = {
        error: false,
        title: ''
    }

    onAddTaskButtonClick = () => {
        let newText = this.state.title

        if (newText !== '') {
            this.props.addTask(newText)
            this.setState({error: false, title: ''})
        } else {
            this.setState({error: true})
        }
    }
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddTaskButtonClick()
        }
    }
    onTitleChanged =(e)=>{
        this.setState({title: e.currentTarget.value})
    }
    render = () => {
        const inputClassName = this.state.error ? 'error' : '';
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" className={inputClassName}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}
                           onChange={this.onTitleChanged}
                    />
                    <button onClick={this.onAddTaskButtonClick}>Add
                    </button>
                </div>
            </div>
        )
    }
}

export default TodoListHeader