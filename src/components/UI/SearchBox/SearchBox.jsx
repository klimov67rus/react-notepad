import styles from './SearchBox.module.css';

const SearchBox = () => {
  return <label htmlFor="search">
      Поиск:
      <input type="text" name="search" id="search" />
    </label>
}

export default SearchBox;