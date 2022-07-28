import { useState } from 'react';
import TodoItem from './todoitem.jsx'


const DEFAULT_TODO_ITEMS = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
  { id: 3, text: 'Meditate' } 
];

const Todo = () => {

    const [todoitems, setTodoItems] = useState(DEFAULT_TODO_ITEMS);

    const deleteTodoItem = id => setTodoItems([...todoitems.filter(i => i.id !== id)]);

    return(
        <div style={{color: "blue", padding:"1em", border:"solid"}} >
            <h2>List of things to do</h2>
            <div className="todo__items">
                {todoitems.map(t => (
                    <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteTodoItem} />
                ))}
            </div>
        </div>
    )
}
export default Todo
