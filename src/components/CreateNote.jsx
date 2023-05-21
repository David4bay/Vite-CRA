import React from 'react';
import {v4 as uuidv4} from 'uuid';

const CreateNote = ({textInput, setTextInput, notes, setNotes, name, setName}) => {

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitNoteHandler = (e) => {
        e.preventDefault();
        setNotes([...notes, { message: textInput, id: uuidv4(), user: name }]);
        setTextInput('');
        setName('');
    }

    const changeNameHandler = (e) => {
        setName(e.target.value);
    }

    if (name.length > 15) {
        setName(name.match(/[A-Za-z0-9? ]{15}/));
    }
    if (textInput.length > 45) {
        setTextInput(textInput.match(/[A-Za-z0-9 ]{45}/));
    }
    
    return (
        <form style={{display: 'flex', margin: 'auto', flexDirection: 'column'}}>
            <input placeholder=' Fill in your name here...' style={{marginBottom: '15px', padding: '8px'}} type='text' value={name} onChange={changeNameHandler}  />
            <textarea 
            value={textInput} 
            onChange={userInputHandler} 
            cols="50" 
            rows="15"
            placeholder=' Fill in your sticky note...'
            ></textarea>
            <button style={{display: 'block', margin: '10px auto'}} onClick={submitNoteHandler} type='button'>Submit</button>
        </form>
    )
}

export default CreateNote;