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
          {/* <div className="content-form__row">
            <label className="content-form__label">Название</label>
            <input
              className="content-form__field"
              id="title"
              value={selectNote.title}
              onChange={(e) => changeNote(e.target.value, "title")}
            />
          </div> */}
          <div className="content-form__row">
            <textarea
              className="content-form__field"
              id="text"
              placeholder="Введите текст..."
              value={selectNote.text}
              onChange={(e) => changeNote(e.target.value, "text")}
            ></textarea>
          </div>
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
    "Нажмите 'Создать заметку'"
  );
};

export default Workspace;
