import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";
export function SearchBox() {
  const language = useSelector((state) => state.local.language);
  return (
    <div className={css.searchBoxContainer}>
      {language === "Ukranian" ? (
        <input type="text" placeholder="напиши тут свою таску..." />
      ) : (
        <input type="text" placeholder="write here your task..." />
      )}

      {language === "Ukranian" ? (
        <button>Додати таску</button>
      ) : (
        <button>Add Task</button>
      )}
    </div>
  );
}
