import TodoItem from './todoitem.jsx'


const Todo = () => {
    return(
        <div style={{color: "blue", padding:"1em", border:"solid"}} >
            <p>This is an instance of the Todo component</p>
            <TodoItem />
        </div>
    )
}
export default Todo
