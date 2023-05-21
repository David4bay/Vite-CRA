import React from 'react';
import Note from './Note';
import {v4 as uuid4} from 'uuid';

const NoteList = ({ notes, setNotes}) => {
    
    return (
        <div>
            {notes.map((note) => 
            <Note 
            key={note} 
            note={note} 
            setNotes={setNotes} 
            notes={notes} 
            />)}
        </div>
    )
}

export default NoteList;
