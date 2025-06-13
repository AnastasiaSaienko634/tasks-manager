// import css from "./LangSwitcher.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/languageSlice";

export function LangSwitcher() {
  const language = useSelector((state) => state.local.language);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <>
      {language === "Ukranian" ? (
        <>
          <select value={language} onChange={handleChange}>
            <option value="English">Англійська</option>
            <option value="Ukranian">Українська</option>
            <option value="German">Німецька</option>
          </select>
          <p>Поточна Мова: {language}</p>
        </>
      ) : (
        <>
          <select value={language} onChange={handleChange}>
            <option value="English">Er</option>
            <option value="Ukranian">Uk</option>
            <option value="German">Gr</option>
          </select>
          <p>Current language:{language}</p>
        </>
      )}
    </>
  );
}
