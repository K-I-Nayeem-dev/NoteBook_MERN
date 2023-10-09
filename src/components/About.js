// import React,{ useContext, useEffect } from 'react';
// import noteContext from '../context/NoteContext';
// const About = () => {
  
//   const a = useContext(noteContext);

//   useEffect(()=>{
//     a.update();
//     // eslint-disable-next-line
//   })

//   return (
//     <h1 className='text-center bg-danger py-3'>Hello this is {a.state.Name} & I read in Class {a.state.Class} </h1>
//   )
// }

// export default About

import React, {useContext, useEffect} from 'react';
import NoteContext from '../context/NoteContext';

const About = () => {
  const a = useContext(NoteContext);

  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  })
  return (
    <h1>This is {a.state.name} & i read in Class {a.state.class}</h1>
  )
}

export default About