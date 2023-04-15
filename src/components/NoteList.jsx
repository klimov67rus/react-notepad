const NoteList = ({ notes, selectNote, setSelectNote, deleteNoteHandler }) => {
  return (
    <div className="notes__list">
      {notes.map((note) => (
        <div
          className={`notes__item note ${
            selectNote && selectNote.id == note.id && "note--selected"
          }`}
          key={note.id}
          onClick={() => setSelectNote(note)}
        >
          <div className="note__top">
            <div className="note__title">{note.title.substr(0, 20)}</div>
            <button
              type="button"
              className="note__delete"
              onClick={() => deleteNoteHandler(note.id)}
            >
              Удалить
            </button>
          </div>

          <div className="note__options">
            <div className="note__date">
              {new Date(note.date).toLocaleDateString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="note__text">{note.text.substr(0, 30)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
