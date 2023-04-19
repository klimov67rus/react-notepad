const Toolbar = ({
  onCreate,
  selectNote,
  formVisible,
  setFormVisible,
  deleteNoteHandler,
}) => {
  return (
    <div className="notes__toolbar toolbar">
      <div className="toolbar__col">
        <button type="button" className="btn" onClick={onCreate}>
          Создать заметку
        </button>
      </div>
      <div className="toolbar__col">
        <button
          disabled={!selectNote ? "disabled" : ""}
          type="button"
          className="btn"
          onClick={() => deleteNoteHandler(selectNote.id)}
        >
          Удалить
        </button>
      </div>
      <div className="toolbar__col toolbar__col--right">
        <span>Режим отображения: </span>
        <button
          type="button"
          className="btn"
          onClick={() => setFormVisible((prev) => !prev)}
        >
          {formVisible ? "Редактор" : "Просмотр"}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
