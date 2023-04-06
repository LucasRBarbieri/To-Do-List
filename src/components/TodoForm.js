import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let inputText = event.target.value;
    setText(inputText);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default TodoForm;
