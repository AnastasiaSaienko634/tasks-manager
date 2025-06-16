import css from "./App.module.css";
import { SearchBox } from "../SearchBox/SearchBox";
import { Header } from "../Header/Header";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { TasksList } from "../TasksList/TasksLIst";
import { Filter } from "../Filter/Filter";

export default function App() {
  return (
    <>
      <div className={css.card}>
        <LangSwitcher />
        <Header />
        <SearchBox />
        <TasksList />
        <Filter />
      </div>
    </>
  );
}
