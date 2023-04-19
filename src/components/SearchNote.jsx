const SearchNote = ({ setFilterQuery }) => {
  return (
    <div className="search-note">
      <input
        className="search-note__field"
        id="search"
        placeholder="Поиск заметок.."
        onChange={(e) => setFilterQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchNote;
