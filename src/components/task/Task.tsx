import { useState } from "react";
import useTask from "../../hooks/useTask";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import {MdVerified, MdPending} from 'react-icons/md'
import { Task as TaskType } from "../../hooks/context";
import { formatDate } from "../../utils/formatter";


const Task = ({ completed, date,id,title}: TaskType) => {
    const {updateTask, removeTask} = useTask()
  const [isCompleted, setIsCompleted] = useState(completed);
  const toggleComplete = () => {
    const status = !isCompleted;
    updateTask(id, status);
    setIsCompleted(status);
  };
  return (
    <article
      className={`task  ${isCompleted ? "complete" : ""}`}
      onClick={toggleComplete}
    >
      <div className="flex-col">
        <h4>{title} <span>
          {isCompleted? <MdVerified className="text-success" size={14} />: <MdPending className="text-warning" size={14} />}
          </span></h4>
        <div className="date">{formatDate(date)}</div>
      </div>
      <div>
        <span onClick={() => removeTask(id)}>
          <FaTrash className="text-danger" />
        </span>
      </div>
    </article>
  );
};

export default Task;
