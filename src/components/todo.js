import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/action";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.reducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add Your List Here ✌️</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items...."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <button
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              +
            </button>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItems" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <button onClick={() => dispatch(deleteTodo(elem.id))}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button onClick={() => dispatch(removeTodo())}>Remove-All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
