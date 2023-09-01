import { createContext, ReactNode, useEffect, useState } from "react";

export type Task = {
  id: string;
  title: string;
  date: string;
  completed: boolean;
};

export interface TaskProps {
  tasks: Task[];
  createTask: (task: Task) => void;
  updateTask: (taskId: string, completed: boolean) => void;
  removeTask: (id: string) => void;
}

export const TaskContext = createContext({} as TaskProps);

const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(
      localStorage.getItem("tasks") || ("[]" as string)
    ) as Task[];
    if (storedTasks) return storedTasks;
    return [];
  });

  useEffect(() => {
    const fetchTask = () => {
      setTasks((prev) => {
        const storedTasks = JSON.parse(
          localStorage.getItem("tasks") || ("[]" as string)
        ) as Task[];
        if (storedTasks) return storedTasks;
        return prev;
      });
    };
    return fetchTask();
  }, []);

  const createTask = (task: Task) => {
    setTasks((prev) => {
      const newTasks = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const updateTask = (taskId: string, completed: boolean): void => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed };
        }
        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const removeTask = (taskId: string): void => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
