"use client";
import { decrement, increment, incrementByAmount } from "@/store/counterSlice";
import { addTodo, removeTodo, updateTodo } from "@/store/todoSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const count = useSelector((state) => state.counter.value);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [value, setValue] = useState("2");
  const [todo, setTodo] = useState({
    id: crypto.randomUUID(),
    title: "",
    status: false,
  });
  const onChange = (e) => {
    let name = [e.target.name];
    let value = e.target.value;
    setTodo({
      ...todo,
      id: crypto.randomUUID(),
      [name]: [value],
    });
  };
  return (
    <div>
      {count}
      <hr />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-red-400"
      />
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(parseInt(value) || 0))}>
        incrementbyValue
      </button>

      <hr />
      <h1>todos</h1>
      <input
        type="text"
        name="title"
        onChange={onChange}
        className="border border-red-400"
      />
      {todos &&
        todos.map((todo) => (
          <p key={todo.id}>
            {todo.title} - {todo.status ? "completed" : "pending"}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              remove
            </button>
            <button
              onClick={() =>
                dispatch(
                  updateTodo({ ...todo, title: "new todo", status: true })
                )
              }
            >
              Edit
            </button>
          </p>
        ))}

      <button onClick={() => dispatch(addTodo(todo))}>Add</button>
    </div>
  );
};

export default Page;
