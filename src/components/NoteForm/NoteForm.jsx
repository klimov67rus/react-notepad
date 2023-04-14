const NoteForm = ({ note, setNote }) => {
  return (
    <form className="notes__form content-form">
      <div className="content-form__row">
        <label className="content-form__label">Название</label>
        <input
          className="content-form__field"
          id="title"
          value={note.title}
          onChange={(e) => setNote(e.target.value, "title")}
        />
      </div>
      <div className="content-form__row">
        <label className="content-form__label">Текст</label>
        <textarea
          className="content-form__field"
          id="text"
          value={note.text}
          onChange={(e) => setNote(e.target.value, "text")}
        ></textarea>
      </div>
    </form>
  );
};

export default NoteForm;
