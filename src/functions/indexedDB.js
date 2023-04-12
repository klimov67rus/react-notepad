class IndexedDB {
  constructor() {
    this.idb =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB ||
      window.shimIndexedDB;

    this.request = this.idb.open("NotesDb", 1);

    this.request.onerror = (event) => {
      console.error("An error occurred with IndexedDB");
      console.error(event);
    };

    this.request.onupgradeneeded = () => {
      const db = this.request.result;
      const store = db.createObjectStore("Notes", { keyPath: "id" });
      store.createIndex("title", "title", {
        unique: false,
      });
      store.createIndex("id", "id", {
        unique: true,
      });
    };
  }

  getAll() {
    this.request.onsuccess = () => {
      const db = this.request.result;
      const tx = db.transaction("Notes", "readonly");

      const store = tx.objectStore("Notes");
      const notesRequest = store.getAll();

      notesRequest.onsuccess = () => {
        console.log(notesRequest.result);
      };

      notesRequest.onerror = (event) => {
        console.error("Error to getAll Notes");
        console.error(event);
      };
    };
  }
}

export default IndexedDB;
