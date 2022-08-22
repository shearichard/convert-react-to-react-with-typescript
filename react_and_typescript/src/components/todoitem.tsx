import React from 'react'
import PropTypes from 'prop-types';

interface Props {
    id: number;
    text: string;
    onDelete: Function;
}

const TodoItem = (props: Props) => {
    return (
        <div style={{color: "red",  padding: "1em", margin: "0.5em" , border:"solid"}} >
            <p id={props.id.toString()}>
                <button onClick={() => props.onDelete(props.id)}>DELETE</button>
                &nbsp; 
                {props.text} 
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
