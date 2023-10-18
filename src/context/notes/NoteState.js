// import NoteContext from "./NoteContext";
// import { useState } from "react";
// const NoteState = (props)=>{
//     const s1 = {
//         "Name" : "Kamurl",
//         "Class" : "5b"
//     }


//     const [state, setState] = useState(s1)

//     const update = ()=>{
    //         setTimeout(() => {
        //             setState( {
            //                 "Name" : "Nayeem",
            //                 "Class" : "OK"
            //             })
            //         }, 1000 );
            //     }
            
            //     return(
                //         <NoteContext.Provider value={{ state,update }}>
                //             {props.children}
                //         </NoteContext.Provider>
                //     )
                
                // }
                
    // export default NoteState;

import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
    
    // fetch api url.....
    const host = "http://localhost:5000";

    const notesinitial = [];
    
    //state Hooks.....
    const [notes, setNotes] = useState(notesinitial);

     // get notes from fetch Api
    const getNotes = async ()=>{
        // Calling api from backend
        const response = await fetch(`${host}/notes/fetchallnotes`, {
            method: "GET", 
            headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMWVmNWJiNDJiNWVhNDNmYjJlM2IwIn0sImlhdCI6MTY5NjcyMjc3OX0.bzv75QBP7x_oPJ35q5esZ8MGrf8BuwZ0rMEtCfXqn5E"
            }
            });
            const json = await response.json();
            setNotes(json);
    }

    // Add notes
    const addNotes = async (title , description, tags)=>{

        // Calling api from backend
        const response = await fetch(`${host}/notes/addnotes`, {
        method: "POST", 
        headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMWVmNWJiNDJiNWVhNDNmYjJlM2IwIn0sImlhdCI6MTY5NjcyMjc3OX0.bzv75QBP7x_oPJ35q5esZ8MGrf8BuwZ0rMEtCfXqn5E"
        },
            body: JSON.stringify({title, description, tags})
        });
    
        const note = await response.json();

        setNotes(notes.concat(note))
    }

    // Delete Notes
    const deleteNote = async (id) => {

        
        // Calling api from backend
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMWVmNWJiNDJiNWVhNDNmYjJlM2IwIn0sImlhdCI6MTY5NjcyMjc3OX0.bzv75QBP7x_oPJ35q5esZ8MGrf8BuwZ0rMEtCfXqn5E"
        }
        });
    
        const json = response.json();
        setNotes(json);

        // delete note from client site
        const newNotes = notes.filter((note)=>{return note._id !== id})
        setNotes(newNotes);
        console.log("Delete Note id " + id)
    }

    // Edit Notes
    const editNote = async (id, title, description, tags)=>{

        // Calling api from backend
        const response = await fetch(`${host}/notes/updatenote/${id}`, {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMWVmNWJiNDJiNWVhNDNmYjJlM2IwIn0sImlhdCI6MTY5NjcyMjc3OX0.bzv75QBP7x_oPJ35q5esZ8MGrf8BuwZ0rMEtCfXqn5E"
        },
            body: JSON.stringify({title, description, tags})
        });

        const json =  await response.json();
        // console.log(json)

        let newState = JSON.parse(JSON.stringify(notes))

        // Login to Edit in Client
        for (let index = 0; index < newState.length; index++) {
            const element = newState[index];
            if(element._id === id){
                newState[index].title = title;
                newState[index].description = description;
                newState[index].tags = tags;
            }
        }
        setNotes(newState);
    }


    return(
        <NoteContext.Provider value={{ notes,  addNotes, deleteNote, editNote , getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;