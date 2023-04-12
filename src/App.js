import React, { useState, useEffect } from "react";
import { format_date } from "./functions/date";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

import "./app.css";

const db = new Dexie("NotesDb");
db.version(1).stores({
  notes: "++id, title, text, date",
});

const { notes } = db;

const App = () => {
  const allNotes = useLiveQuery(() => notes.toArray(), []);

  return (
    <div className="notes container">
      <div className="notes__toolbar">Toolbar</div>
      <div className="notes__list">
        <div className="notes__item note">
          <div className="note__title">Новая заметка</div>
          <div className="note__options">
            <div className="note__date">12:17</div>
            <div className="note__text">No additional text</div>
          </div>
        </div>
      </div>
      <div className="notes__content">
        <form className="notes__form content-form">
          <div className="content-form__row">
            <label className="content-form__label">Название</label>
            <input className="content-form__field" id="title" />
          </div>
          <div className="content-form__row">
            <label className="content-form__label">Текст</label>
            <textarea className="content-form__field" id="text"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
