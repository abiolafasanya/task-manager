import { useTask } from "../../hooks/useTask";
import Task from "./Task";

const Tasks = () => {
  const { tasks } = useTask();
  return (
    <section className="task-area">
      <h2>Tasks</h2>
      <div className="tasks">
        <p>You have a total of {tasks.length} task</p>
        <p className="text-info">Tap on the card to toggle completion state</p>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => <Task key={task.id} {...task} />)
        ) : (
          <p>No task available</p>
        )}
      </div>
    </section>
  );
};

export default Tasks;
