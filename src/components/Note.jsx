import React from 'react';
import { useState } from 'react';
import Likes from './Likes';
import './Note.css';

function Note({note, notes, setNotes}) {

    const deletenote = (note) => {
        setNotes(notes.filter((state) => state.id !== note.id))
    }

    const noteStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        gap: '30px', 
        justifyContent: 'center', 
        alignItems: 'center',
        border: '1px solid',
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: 'hsla(0, 0%, 10%, 0.5)',
        width: '50vw',
        margin: '5px auto 20px auto',
        padding: '35px',
        borderRadius: '10px'
    }

    return (
        <div style={noteStyle}>
            <h2 style={{margin: '5px auto'}}>{note.user}</h2>
            <h3>{note.message}</h3>
            <div style={{display: 'flex', gap: '25px'}}>
            <button onClick={() => deletenote(note)} style={{width: '7rem'}}>Delete</button>
            <Likes />
            </div>
        </div>
    )
}

export default Note;