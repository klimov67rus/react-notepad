import React, { useState, useEffect } from "react";
import Dexie from "dexie";
import uuid from "react-uuid";
import { useLiveQuery } from "dexie-react-hooks";

import "./app.css";
import NoteForm from "./components/NoteForm/NoteForm";

const db = new Dexie("NotesDb");
db.version(1).stores({
  notes: "++id, title, text, date",
});

// db.notes.add({
//   [fieldname]: e.target.value,
//   date: new Date(),
// });

// const notesList = useLiveQuery(
//   () => db.notes.where("title").startsWith(search).toArray(),
//   [search]
// );

const App = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", text: "" });

  const setNoteHandler = (value, field) => {
    setNote({
      ...note,
      [field]: value,
    });
  };

  const createNoteHandler = () => {
    console.log(note);
    console.log(note.id);
    // if (note.id !== undefined) {
    //   const updateNotes = notes.map((item) => {
    //     if (item.id === note.id) {
    //       return note;
    //     }
    //     return item;
    //   });
    //   setNotes(updateNotes);
    // } else {
    //   setNotes((prev) => [...prev, note]);
    // }

    const newNote = { ...note, id: uuid(), date: new Date() };
    setNotes((prev) => [...prev, newNote]);
  };

  const changeActiveNoteHandler = (id) => {
    setNote(notes.find((note) => note.id === id));
  };

  const deleteNoteHendler = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="notes container">
      <div className="notes__toolbar toolbar">
        <div className="toolbar__row">
          <button
            type="button"
            className="note-create"
            onClick={createNoteHandler}
          >
            Добавить
          </button>
        </div>
        <div className="toolbar__row">
          <label className="toolbar__label">Поиск:</label>
          <input className="toolbar__field" id="search" />
        </div>
      </div>

      <div className="notes__list">
        {notes.map(({ title, text, date, id }) => (
          <div
            className="notes__item note"
            key={uuid()}
            onClick={() => changeActiveNoteHandler(id)}
          >
            <div className="note__top">
              <div className="note__title">{title}</div>
              <button
                type="button"
                className="note__delete"
                onClick={() => deleteNoteHendler(id)}
              >
                Удалить
              </button>
            </div>

            <div className="note__options">
              <div className="note__date">
                {new Date(date).toLocaleDateString("ru-RU", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div className="note__text">{text && text.substr(0, 10)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="notes__content">
        <NoteForm note={note} setNote={setNoteHandler} />
        <div className="preview">
          <div className="preview__title">{note.title}</div>
          <div className="preview__text">{note.text}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
