import { useState } from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ onChangeSearchText }) => {
  const [searchText, setSearchText] = useState("");

  const changeSearchTextHandler = (e) => {
    setSearchText(e.target.value);
    onChangeSearchText(e.target.value);
  };

  return (
    <div className={styles["search-box"]}>
      <label htmlFor="search">
        Поиск:
        <input
          type="text"
          name="search"
          id="search"
          onChange={changeSearchTextHandler}
          value={searchText}
        />
      </label>
    </div>
  );
};

export default SearchBox;
