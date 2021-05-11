import React, {useState} from 'react'
import TodoList from './TodoList'

const App = () => {
    const [state, setState] = useState([
            {id: 1, title: 'First todo', completed: false},
            {id: 2, title: 'Second todo', completed: true},
        ]
    )

    const [toDoTitle, setToDoTitle] = useState('')

    const clearValue = (value) => {
        value = ''
    }

    const addTodo = (event) => {
        if (event.key === 'Enter') {
            setState([
                ...state,
                {
                    id: Date.now(),
                    title: toDoTitle,
                    completed: false
                }
            ])
            clearValue(event.target.value)
        }
    }

    return (
        <div className="container">
            <h1>Todo app</h1>

            <div className="input-field">
                <input type="text"
                       value={toDoTitle}
                       onChange={e => setToDoTitle(e.target.value)}
                       onKeyPress={addTodo}
                />
                <label>Todo name</label>
            </div>

            <TodoList todos={state}/>
        </div>
    )
}

export default App