import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { toggleCompleted } from "../../redux/tasksSlice";

export function Task({ id, number }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.local.language);

  const handleSubmit = () => {
    dispatch(deleteTask(id));
  };

  const task = useSelector((state) =>
    state.tasks.items.find((t) => t.id === id)
  );

  if (!task) return null;

  const handleChange = () => {
    dispatch(toggleCompleted(id));
  };
  return (
    <>
      {language === "Ukranian" ? (
        <li key={id} className={css.task}>
          <p>Завдання: {number}</p>
          <p className={css.text}>{task.text}</p>
          <input
            type="checkbox"
            className={css.completedTaskButton}
            onChange={handleChange}
            checked={task.completed}
          />
          <button className={css.button} onClick={handleSubmit}>
            <MdOutlineDelete className={css.icon} />
          </button>
        </li>
      ) : (
        <li key={id} className={css.task}>
          <p>Task: {number}</p>
          <p className={css.text}>{task.text}</p>
          <input
            type="checkbox"
            className={css.completedTaskButton}
            onChange={handleChange}
            checked={task.completed}
          />
          <button className={css.button} onClick={handleSubmit}>
            <MdOutlineDelete className={css.icon} />
          </button>
        </li>
      )}
    </>
  );
}

//I know that there schould be handleClick not handleSubmit, I just wrote so ;)
