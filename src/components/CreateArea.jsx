import React, { useState } from "react";




function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    url:""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      url:""
    });
    event.preventDefault();
  }

  return (
    <div className="footer">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <input
          name="url"
          onChange={handleChange}
          value={note.url}
          placeholder="Image URL"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Add Content"
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
