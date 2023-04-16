import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Workspace = ({ selectNote, updateNotes, setSelectNote }) => {
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
      <form className="notes__form content-form">
        <div className="content-form__row">
          <label className="content-form__label">Название</label>
          <input
            className="content-form__field"
            id="title"
            value={selectNote.title}
            onChange={(e) => changeNote(e.target.value, "title")}
          />
        </div>
        <div className="content-form__row">
          <label className="content-form__label">Текст</label>
          <textarea
            className="content-form__field"
            id="text"
            value={selectNote.text}
            onChange={(e) => changeNote(e.target.value, "text")}
          ></textarea>
        </div>
      </form>
      <div className="preview">
        <div className="preview__title">{selectNote.title}</div>
        <ReactMarkdown className="preview__text">
          {selectNote.text}
        </ReactMarkdown>
      </div>
    </div>
  ) : (
    "Нажмите 'Создать заметку'"
  );
};

export default Workspace;
