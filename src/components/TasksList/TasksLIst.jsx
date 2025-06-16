import css from "./TasksList.module.css";

import { useSelector } from "react-redux";
import { Task } from "../Task/Task";

const getVisiableTsks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);

    default:
      return tasks;
  }
};

export function TasksList() {
  const tasks = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.filters.status);
  const visiableTasks = getVisiableTsks(tasks, status);

  return (
    <>
      <ul className={css.taskList}>
        {visiableTasks.map((task, index) => (
          <Task
            key={task.id}
            text={task.text}
            id={task.id}
            number={index + 1}
            task={task}
          />
        ))}
      </ul>
    </>
  );
}
