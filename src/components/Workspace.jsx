import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Workspace = ({ selectNote, updateNotes, setSelectNote, formVisible }) => {
  const changeNote = (value, field) => {
    const Note = {
      ...selectNote,
      [field]: value,
    };
    setSelectNote(Note);
    updateNotes(Note);
  };

  return selectNote ? (
    <div className="notes__content">
      {formVisible ? (
        <form className="notes__form content-form">
          <textarea
            className="content-form__field"
            id="text"
            placeholder="Введите текст..."
            value={selectNote.text}
            onChange={(e) => changeNote(e.target.value, "text")}
          ></textarea>
        </form>
      ) : (
        <div className="preview">
          <ReactMarkdown className="preview__text">
            {selectNote.text}
          </ReactMarkdown>
        </div>
      )}
    </div>
  ) : (
    <div className="notes__content">
      <span style={{ fontStyle: "italic" }}>
        Создайте или выберите заметку из списка
      </span>
    </div>
  );
};

export default Workspace;
