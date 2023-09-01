import { FormEvent, useState } from "react";
import { useTask } from "../hooks/useTask";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../hooks/context";

const Form = () => {
  const { createTask } = useTask();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const task: Task = {
      title,
      date,
      completed: false,
      id: uuidv4(),
    };
    createTask(task);
    setTitle("")
    setDate("")
  };

  return (
    <section className="form-area">
      <h2>Add Task</h2>
      <article className="form-container">
        <form onSubmit={handleAddTask}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="datetime-local"
              className="form-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn">Add Task</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Form;
