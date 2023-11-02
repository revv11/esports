import React, { useState } from "react";
import Header from "./Header";

import Note from "./Note";
import CreateArea from "./CreateArea";




function App() {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
  const [notes, setNotes] = useState(savedNotes);

  function addNote(newNote) {
    setNotes(prevNotes => {
      localStorage.setItem('notes', JSON.stringify([...prevNotes, newNote]))
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      localStorage.setItem('notes', JSON.stringify(updatedNotes))
      return updatedNotes;
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            url={noteItem.url}
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
 
  
}
export default App;
  