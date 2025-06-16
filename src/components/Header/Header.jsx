import { useSelector } from "react-redux";
import css from "./Header.module.css";

export function Header() {
  const language = useSelector((state) => state.local.language);
  const tasks = useSelector((state) => state.tasks.items);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },

    { active: 0, completed: 0 }
  );

  return (
    <>
      {language === "Ukranian" ? (
        <div className={css.headerContainer}>
          <div className={css.firstSide}>
            <h2 className={css.title}>Твої завдання</h2>
            <ul>
              <li>
                <p>Активні:{count.active} </p>
              </li>
              <li>
                <p>Завершені:{count.completed} </p>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={css.headerContainer}>
          <div className={css.firstSide}>
            <h2 className={css.title}>Your Tasks</h2>
            <ul>
              <li>
                <p>Active:{count.active} </p>
              </li>
              <li>
                <p>Completed:{count.completed} </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
