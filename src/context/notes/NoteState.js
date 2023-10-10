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
    const notesinitial = [
            {
            "_id": "652311a0183b2bf2f3aa003a",
            "user": "6521ef5bb42b5ea43fb2e3b0",
            "title": "addenwyfd f",
            "description": "sadfiedfeffjasef",
            "tags": "fsadfdf isf sadfdoiasd foisdfjiosdfj isdof sdaf jasdfjd",
            "date": "2023-10-08T20:31:28.014Z",
            "__v": 0
            },
            {
            "_id": "6523121f183b2bf2f3aa0040",
            "user": "6521ef5bb42b5ea43fb2e3b0",
            "title": "addenwyfd fef",
            "description": "sadfiedfeffjasef",
            "tags": "fsadfdf isf sadfdoiasd foisdfjiosdfj isdof sdaf jasdfjd",
            "date": "2023-10-08T20:33:35.058Z",
            "__v": 0
            },
        ];

    const [notes, setNotes] = useState(notesinitial);

    // Add notes
    const addNotes = (title , description, tags)=>{
        console.log('Adding a new Notes')
        let note = {
            "_id": "652413b4f3484cc79af6eab9",
            "user": "6521ef5bb42b5ea43fb2e3b0",
            "title": title,
            "description": description,
            "tags": tags,
            "date": "2023-10-09T14:52:36.515Z",
            "__v": 0
            }
        setNotes(notes.concat(note))
    }
    // Delete Notes
    const deleteNote = ()=>{
        
    }
    // Edit Notes
    const updateNote = ()=>{
        
    }


    return(
        <NoteContext.Provider value={{ notes,  addNotes, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;