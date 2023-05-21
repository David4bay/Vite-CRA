import React, { useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import NoteList from './components/NoteList';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [name, setName] = useState('')
  const [textInput, setTextInput] = useState('')
  const [notes, setNotes] = useState([]);
  const [hover, setHover] = useState(false);

  const headerColor = {
    color: 'gold'
  }

  const hovered = () => {
    hover ? setHover(false) : setHover(true)
  }

  return (
  <div style={{display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center', padding: '10px'}}>
    <h1 onMouseOver={hovered} style={{color: `${hover ? 'gold' : !hover ? 'rgba(255, 255, 255, 0.87)' : 'gold'}`}}>Sticky Notes App!</h1>
    <CreateNote name={name} setName={setName} textInput={textInput} setTextInput={setTextInput} notes={notes} setNotes={setNotes} />
    <NoteList notes={notes} setNotes={setNotes} />
  </div>
  )
}

export default App;