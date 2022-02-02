import "./write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" className="writeInput" placeholder="Title" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
