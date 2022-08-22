import React from 'react'
import PropTypes from 'prop-types';

const TodoItem = ({id, text, onDelete}) => {
    return (
        <div style={{color: "red",  padding: "1em", margin: "0.5em" , border:"solid"}} >
            <p id={id}>
                <button onClick={() => onDelete(id)}>DELETE</button>
                &nbsp; 
                {text} 
            </p>
        </div>            
    )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default TodoItem
