import React from "react";
import { useEffect, useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const escFunction = () => {
    document.querySelector(".todos__new").blur();
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        escFunction();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!inputValue || inputValue === "") {
      return;
    } else {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="AddTaskForm">
      <input
        className="AddTaskForm__new"
        type="text"
        placeholder="What needs to be done?"
        onChange={handleChange}
        value={inputValue}
      />
      <button
        className="AddTaskForm__add"
        type="submit"
        onClick={handleSubmitClick}
      >
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
