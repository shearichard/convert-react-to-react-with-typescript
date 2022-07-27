import PropTypes from 'prop-types';

const TodoItem = ({id, text}) => {
    return (
        <div style={{color: "red",  padding: "1em", margin: "0.5em" , border:"solid"}} >
            <p id={id}>{text}</p>
        </div>            
    )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default TodoItem
