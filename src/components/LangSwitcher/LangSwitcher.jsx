// import css from "./LangSwitcher.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/store";

export function LangSwitcher() {
  const language = useSelector((state) => state.local.language);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <>
      <select value={language} onChange={handleChange}>
        <option value="English">En</option>
        <option value="Ukranian">Uk</option>
        <option value="German">Gr</option>
      </select>
      <p>Current language:{language}</p>
    </>
  );
}
