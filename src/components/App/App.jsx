// import css from "./App.module.css";
import { SearchBox } from "../SearchBox/SearchBox";
import { Header } from "../Header/Header";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";

export default function App() {
  return (
    <>
      <LangSwitcher />
      <Header />
      <SearchBox />
    </>
  );
}
