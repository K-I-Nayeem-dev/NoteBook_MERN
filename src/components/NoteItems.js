import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItems = (props) => {

    const context = useContext(NoteContext);
    const {deleteNote} = context;


    const {note} = props;
    return (
        <div className="col-lg-4 py-3">
            <div className="card" style={{ width: "21rem" }}>
            <div className="card-header">Note No: {props.num} </div>
                <div className="card-body">
                    <h5 className="card-title">Title : {note.title}</h5>
                    <p className="card-text">Desc: {note.description}</p>
                    <p className="card-text">Tags: {note.tags}</p>
                    <p className="card-text text-muted">Date: {new Date(note.date).toLocaleDateString()}</p>
                    <div className="actions">
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash-can mx-3" onClick={()=>{deleteNote(note._id)}}></i>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NoteItems