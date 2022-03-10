import React from "react";

function ToDoItem(props) {
  const newItem = props.item;

  return (
    //style={{ textDecorationLine: 'line-through' }}
    <li
      onClick={() => {
        props.deleteItem(props.id);
      }}
    >
      {newItem}
    </li>
  );
}

export default ToDoItem;
