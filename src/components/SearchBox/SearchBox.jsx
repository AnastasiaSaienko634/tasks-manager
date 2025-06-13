import css from "./SearchBox.module.css";
export function SearchBox() {
  return (
    <div className={css.searchBoxContainer}>
      <input type="text" placeholder="write here your task..." />
      <button>Add Task</button>
    </div>
  );
}
