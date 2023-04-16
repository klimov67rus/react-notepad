const Toolbar = ({
  onCreate,
  setFilterQuery,
  selectNote,
  formVisible,
  setFormVisible,
}) => {
  return (
    <div className="notes__toolbar toolbar">
      <div className="toolbar__col">
        <button type="button" className="note-create" onClick={onCreate}>
          Создать заметку
        </button>
      </div>
      {selectNote !== false && (
        <div className="toolbar__col">
          <button
            type="button"
            className="note-create"
            onClick={() => setFormVisible((prev) => !prev)}
          >
            {formVisible ? "Просмотр" : "Редактор"}
          </button>
        </div>
      )}
      <div className="toolbar__col">
        <label className="toolbar__label">Поиск:</label>
        <input
          className="toolbar__field"
          id="search"
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Toolbar;
