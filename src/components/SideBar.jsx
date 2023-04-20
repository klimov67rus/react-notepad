import SearchNote from "./SearchNote";
import NoteList from "./NoteList";

const Sidebar = ({
  notes,
  selectNote,
  setSelectNote,
  setFilterQuery,
  isSidebarVisible,
}) => {
  return (
    <div className={`sidebar ${isSidebarVisible ? "sidebar-visible" : ""}`}>
      <SearchNote setFilterQuery={setFilterQuery} />
      {notes &&
        (notes.length !== 0 ? (
          <NoteList
            notes={notes}
            selectNote={selectNote}
            setSelectNote={setSelectNote}
          />
        ) : (
          <div className="note__empty_message">Заметок не найдено</div>
        ))}
    </div>
  );
};

export default Sidebar;
