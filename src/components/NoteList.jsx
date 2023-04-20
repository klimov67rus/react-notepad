import RemoveMarkdown from "remove-markdown";

const NoteList = ({ notes, selectNote, setSelectNote }) => {
  return (
    <div className="notes__list">
      {notes?.map((note) => (
        <div
          className={`notes__item note ${
            selectNote && selectNote.id == note.id && "note--selected"
          }`}
          key={note.id}
          onClick={() => setSelectNote(note)}
        >
          <div className="note__top">
            <div className="note__title">
              {note.text !== ""
                ? RemoveMarkdown(note.text.substr(0, 20))
                : "Без имени.."}
            </div>
          </div>

          <div className="note__options">
            <div className="note__date">
              {new Date(note.date).toLocaleDateString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
