import React, { useState } from "react";

function ToDoItem(props) {
  const newItem = props.item;
  const itemKey = props.Itemkey.toString();

  const [isClicked, setIsClicked] = useState("");

  function strikeThrough() {
    if (isClicked !== "line-through") {
      setIsClicked("line-through");
    } else if (isClicked === "line-through") {
      setIsClicked("");
    }
  }

  return (
    //style={{ textDecorationLine: 'line-through' }}
    <li
      style={{ textDecorationLine: isClicked }}
      onClick={strikeThrough}
      key={itemKey}
    >
      {newItem}
    </li>
  );
}

export default ToDoItem;
