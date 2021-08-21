import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AddTodo, DoneTodo } from "../actions/actions";

export default function App() {
  const todos = useSelector((state) => state.TodoReducer.todos);
  const [val, setval] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input type="text" onChange={(e) => setval(e.target.value)} />
      <button onClick={() => dispatch(AddTodo(val))}> ADD </button>
      {todos.map((el) => (
        <div style={{ display: "flex" }}>
          <span  style={ {textDecoration: el.complete=== true ?  'line-through' :  null } }  >{el.text}</span>
          <button onClick={() => dispatch(DoneTodo(el.id))}> Done</button>
          
        </div>
      ))}
    </div>
  );
}
