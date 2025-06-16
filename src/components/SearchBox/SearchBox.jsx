import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

import { addTask } from "../../redux/tasksSlice";
import { nanoid } from "nanoid";
export function SearchBox() {
  const language = useSelector((state) => state.local.language);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = event.target.elements.searchBox;

    if (!input.value.trim()) return;

    dispatch(
      addTask({
        id: nanoid(),
        completed: false,
        text: input.value.trim(),
      })
    );
    input.value = "";
  };
  return (
    <div className={css.searchBoxContainer}>
      {language === "Ukranian" ? (
        <form onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="searchBox"
            placeholder="напиши тут своє завдання..."
          />
          <button className={css.button} type="submit">
            Додати завдання
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="searchBox"
            placeholder="write here your task..."
          />
          <button className={css.button} type="submit">
            Add Task
          </button>
        </form>
      )}
    </div>
  );
}
