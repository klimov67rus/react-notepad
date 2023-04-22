const Toolbar = ({
  onCreate,
  selectNote,
  formVisible,
  setFormVisible,
  deleteNoteHandler,
  setIsSidebarVisible,
  isSidebarVisible,
}) => {
  return (
    <div className="notes__toolbar toolbar">
      <div className="toolbar__col">
        <button
          type="button"
          className={`btn open-sidebar ${
            isSidebarVisible ? "open-sidebar--active" : ""
          }`}
          onClick={() => setIsSidebarVisible((prev) => !prev)}
        >
          <svg
            className="open-sidebar-icon"
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.5 21C1.573 21 0 22.573 0 24.5S1.573 28 3.5 28 7 26.427 7 24.5 5.427 21 3.5 21zm0 1C4.887 22 6 23.113 6 24.5S4.887 27 3.5 27 1 25.887 1 24.5 2.113 22 3.5 22zm0-11C1.573 11 0 12.573 0 14.5S1.573 18 3.5 18 7 16.427 7 14.5 5.427 11 3.5 11zm0 1C4.887 12 6 13.113 6 14.5S4.887 17 3.5 17 1 15.887 1 14.5 2.113 12 3.5 12zm0-11C1.573 1 .013 2.573.013 4.5S1.573 8 3.5 8s3.487-1.573 3.487-3.5S5.428 1 3.5 1zm0 1c1.387 0 2.513 1.113 2.513 2.5S4.886 7 3.5 7 .987 5.887.987 4.5 2.113 2 3.5 2zm26 3h-20c-.67 0-.65-1 0-1h20c.66 0 .67 1 0 1zm0 10h-20c-.67 0-.65-1 0-1h20c.66 0 .67 1 0 1zm0 10h-20c-.67 0-.65-1 0-1h20c.66 0 .67 1 0 1z" />
          </svg>
          <svg
            className="close-sidebar-icon"
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29.484 0c-.13.004-.252.057-.343.15L17.164 12.13c-.49.47.235 1.197.706.707L29.846.857c.325-.318.1-.857-.363-.857zM12.488 17c-.13.004-.25.058-.34.15L.162 29.14c-.486.467.233 1.186.7.7L12.848 17.85c.325-.313.093-.85-.36-.85zM.5 0a.5.5 0 0 0-.348.86L29.14 29.845a.5.5 0 1 0 .706-.706L.86.152A.5.5 0 0 0 .5 0z" />
          </svg>
        </button>
      </div>
      <div className="toolbar__col">
        <button type="button" className="btn" onClick={onCreate}>
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.5 2c-.276.004-.504.224-.5.5v4c0 .822.678 1.5 1.5 1.5h4c.668.01.646-1 0-1h-4c-.286 0-.5-.214-.5-.5v-4c.004-.282-.218-.504-.5-.5zm-15-2C3.678 0 3 .678 3 1.5v27c0 .822.678 1.5 1.5 1.5h21c.822 0 1.5-.678 1.5-1.5v-21c0-.133-.053-.26-.146-.354l-7-7C19.76.053 19.634 0 19.5 0zm0 1h14.793L26 7.707V28.5c0 .286-.214.5-.5.5h-21c-.286 0-.5-.214-.5-.5v-27c0-.286.214-.5.5-.5z" />
          </svg>
          <span>New</span>
        </button>
      </div>
      <div className="toolbar__col">
        <button
          disabled={!selectNote ? "disabled" : ""}
          type="button"
          className="btn"
          onClick={() => deleteNoteHandler(selectNote.id)}
        >
          <svg
            fill="#000000"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.5 12c.294 0 .525.246.497.54l-1 11.984c-.054.693-1.055.61-.994-.082l1-11.984c.016-.262.234-.458.496-.458zm-7 0c-.294 0-.525.246-.497.54l1 11.984c.054.693 1.055.61.994-.082l-1-11.984c-.016-.262-.234-.458-.496-.458zm1-12c-.822 0-1.5.678-1.5 1.5V4H5.5c-.277 0-.5.223-.5.5s.223.5.5.5h19c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H19V1.5c0-.822-.678-1.5-1.5-1.5zm0 1h5c.286 0 .5.214.5.5V4h-6V1.5c0-.286.214-.5.5-.5zm-6 5c-.824 0-1.58.673-1.498 1.547l2 21C7.074 29.307 7.676 30 8.5 30h13c.824 0 1.426-.692 1.498-1.453l2-21C25.08 6.673 24.324 6 23.5 6zm0 1h17c.284 0 .524.224.502.453l-2 21c-.033.342-.218.547-.502.547h-13c-.284 0-.47-.205-.502-.547l-2-21C5.976 7.223 6.216 7 6.5 7z" />
          </svg>
          <span>Delete</span>
        </button>
      </div>
      <div className="toolbar__col toolbar__col--right">
        <button
          type="button"
          className="btn"
          onClick={() => setFormVisible((prev) => !prev)}
        >
          {formVisible ? (
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.474 10.002c-1.1 0-2.157.462-2.966 1.195-.925.84-1.508 2.047-1.508 3.294 0 .665 1 .688 1 .024 0-.965.466-1.93 1.182-2.58.627-.57 1.47-.908 2.318-.934.655 0 .672-.998-.026-.998zM15 8c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6zm0-3c-4.883 0-8.625 1.953-11.13 4.02-1.254 1.033-2.2 2.095-2.843 2.968-.32.437-.565.826-.736 1.15-.17.325-.29.52-.29.862 0 .34.12.537.29.86.172.326.416.715.737 1.152.642.873 1.59 1.935 2.842 2.968C6.374 22.047 10.116 24 15 24c4.883 0 8.625-1.953 11.13-4.02 1.254-1.033 2.2-2.095 2.843-2.968.32-.437.565-.826.736-1.15.17-.325.29-.52.29-.862 0-.34-.12-.537-.29-.86-.172-.326-.416-.715-.737-1.152-.642-.873-1.59-1.935-2.842-2.968C23.626 7.953 19.884 6 15 6zm0 1c4.617 0 8.125 1.838 10.494 3.79 1.185.978 2.082 1.984 2.674 2.79.296.403.515.758.656 1.024.175.327.136.55 0 .792-.147.263-.36.62-.656 1.024-.592.806-1.49 1.812-2.674 2.79C23.124 21.16 19.617 23 15 23s-8.125-1.838-10.494-3.79c-1.185-.978-2.082-1.984-2.674-2.79-.296-.403-.51-.76-.656-1.024-.14-.25-.17-.485 0-.792.145-.264.36-.62.656-1.024.592-.806 1.49-1.812 2.674-2.79C6.876 8.84 10.383 7 15 7z" />
            </svg>
          ) : (
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.498 7c-.182 0-.35.1-.437.26l-8.987 15.988c-.328.58.542 1.072.87.492L19.93 7.75c.196-.332-.045-.75-.432-.75zm3.03 2c.112.006.22.05.304.125l6.994 5.996c.232.2.232.56 0 .76l-6.994 5.995c-.48.43-1.14-.352-.652-.757l6.554-5.618-6.554-5.618c-.368-.308-.132-.882.348-.882zM7.472 9c-.112.006-.22.05-.304.125L.174 15.12c-.232.2-.232.56 0 .76l6.994 5.995c.48.43 1.14-.352.652-.757L1.266 15.5 7.82 9.882C8.188 9.574 7.952 9 7.472 9z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;