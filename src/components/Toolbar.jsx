const Toolbar = ({ onCreate }) => {
  return (
    <div className="notes__toolbar toolbar">
      <div className="toolbar__row">
        <button type="button" className="note-create" onClick={onCreate}>
          Create empty
        </button>
      </div>
      <div className="toolbar__row">
        <label className="toolbar__label">Поиск:</label>
        <input className="toolbar__field" id="search" />
      </div>
    </div>
  );
};

export default Toolbar;
