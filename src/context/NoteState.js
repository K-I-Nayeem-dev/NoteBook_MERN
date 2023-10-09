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
    
    const s1 = {
        "name": "Kamurl",
        "class": "5b"
    }

    const [state, setState] = useState(s1)
    
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Nayeem",
                "class": "6b"
            })
        }, 2000);
    }

    return(
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;