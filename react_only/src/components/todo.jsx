import TodoItem from './todoitem.jsx'


const Todo = () => {
    return(
        <div style={{color: "blue", padding:"1em", border:"solid"}} >
            <h2>List of things to do</h2>
            <TodoItem id={1} text={"First todo item"} />
            <TodoItem id={2} text={"Second todo item"} />
            <TodoItem id={3} text={"Third todo item"}/>
        </div>
    )
}
export default Todo
