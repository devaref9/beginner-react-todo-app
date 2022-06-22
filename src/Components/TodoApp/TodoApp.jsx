import React from "react";
import { useState, useEffect } from "react";
import { AddTaskForm, TaskList, FilterTask } from "../../Components";
import { v4 as uuid } from "uuid";

const TODOS_CATEGORIES = {
  all: "ALL_TODOS",
  active: "ACTIVE_TODOS",
  completed: "COMPLETED_TODOS",
};

const TodoApp = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [filter, setFilter] = useState(TODOS_CATEGORIES.all);
  const [searchKey, setSearchKey] = useState("");

  const addTask = (taskTitle) => {
    let newTasks = [...tasks, { task: taskTitle, status: false, id: uuid() }];
    setTasks(newTasks);
    localStorage.setItem("todos", JSON.stringify(newTasks));
  };

  const deleteTask = (taskId) => {
    const newTask = tasks.filter((item) => item.id !== taskId);
    setTasks(newTask);
    localStorage.setItem("todos", JSON.stringify(newTask));
  };

  const updateTaskStatus = (taskId) => {
    const newTask = tasks.find((item) => item.id === taskId);
    newTask.status = !newTask.status;
    setRefresh(refresh + 1);
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const updateFilteredTasks = (array, category) => {
    switch (category) {
      case "ALL_TODOS":
        setFilteredTasks(array);
        break;
      case "ACTIVE_TODOS":
        setFilteredTasks(array.filter((item) => !item.status));
        break;
      case "COMPLETED_TODOS":
        setFilteredTasks(array.filter((item) => item.status));
        break;
      default:
        setFilteredTasks(array);
    }
  };

  useEffect(() => {
    if (searchKey !== "") {
      const newTasks = tasks.filter((item) => item.task.includes(searchKey));
      updateFilteredTasks(newTasks, filter);
    } else {
      updateFilteredTasks(tasks, filter);
    }
  }, [filter, tasks, searchKey]);

  return (
    <div className="TodoApp container">
      <AddTaskForm addTask={addTask} />
      <TaskList
        deleteTask={deleteTask}
        filteredTasks={filteredTasks}
        updateTaskStatus={updateTaskStatus}
      />
      <FilterTask
        tasks={tasks}
        categories={TODOS_CATEGORIES}
        updateFilter={setFilter}
        setSearchKey={setSearchKey}
      />
    </div>
  );
};

export default TodoApp;
