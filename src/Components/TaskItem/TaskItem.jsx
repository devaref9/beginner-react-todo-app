import { MdOutlineClose } from "react-icons/md";

const TaskItem = ({ data, deleteTask, updateTaskStatus }) => {
  const handleCheckbox = () => {
    updateTaskStatus(data.id);
  };

  const handleClick = (e) => {
    e.preventDefault();
    deleteTask(data.id);
  };

  return (
    <li className="TaskItem">
      <div className="TaskItem__content">
        <input
          onChange={handleCheckbox}
          type="checkbox"
          checked={data.status}
        />
        <span
          className="TaskItem__item"
          style={
            data.status
              ? {
                  textDecoration: "line-through",
                }
              : {}
          }
        >
          {data.task}
        </span>
      </div>
      <button className="TaskItem__remove" onClick={handleClick}>
        <MdOutlineClose className="TaskItem__remove-icon" />
      </button>
    </li>
  );
};

export default TaskItem;
