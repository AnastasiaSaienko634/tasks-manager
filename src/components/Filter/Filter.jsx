import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { setStatusFilter } from "../../redux/filterSlice";

export function Filter() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.local.language);
  const filter = useSelector((state) => state.filters.status);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <>
      {language === "Ukranian" ? (
        <div className={css.container}>
          <h2 className={css.title}>Відфільтрувати за статусом</h2>
          <ul className={css.list}>
            <button
              className={css.button}
              selected={filter === "all"}
              onClick={() => handleFilterChange("all")}
            >
              Всі
            </button>
            <button
              className={css.button}
              selected={filter === "active"}
              onClick={() => handleFilterChange("active")}
            >
              Активні
            </button>
            <button
              className={css.button}
              selected={filter === "completed"}
              onClick={() => handleFilterChange("completed")}
            >
              Завершені
            </button>
          </ul>
        </div>
      ) : (
        <div className={css.container}>
          <h2 className={css.title}>Filter by Status</h2>
          <ul className={css.list}>
            <button
              className={css.button}
              selected={filter === "all"}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className={css.button}
              selected={filter === "active"}
              onClick={() => handleFilterChange("active")}
            >
              Active
            </button>
            <button
              className={css.button}
              selected={filter === "completed"}
              onClick={() => handleFilterChange("completed")}
            >
              Completed
            </button>
          </ul>
        </div>
      )}
    </>
  );
}
