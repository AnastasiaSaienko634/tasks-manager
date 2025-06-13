import css from "./Header.module.css";

export function Header() {
  return (
    <div className={css.headerContainer}>
      <div className={css.firstSide}>
        <h2>Tasks</h2>
        <ul>
          <li>
            <p>Active: </p>
          </li>
          <li>
            <p>Completed: </p>
          </li>
        </ul>
      </div>
      <div className={css.secondSide}>
        <h2>Filter by Status</h2>
        <ul>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </ul>
      </div>
    </div>
  );
}
