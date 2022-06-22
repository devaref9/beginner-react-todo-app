import React from "react";
import { TaskItem } from "../../Components";

const TaskList = ({ deleteTask, filteredTasks, updateTaskStatus }) => {
  return (
    <ul className="TaskList">
      {filteredTasks.map((task, index) => {
        return (
          <TaskItem
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
            data={task}
            key={`task-${index}`}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
