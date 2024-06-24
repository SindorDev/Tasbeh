import React from 'react'
import './Incrument.css'
import { useState} from 'react'
import testAudio  from "../audio/lala.mp3"

const audio = new Audio(testAudio) 
function Incrument() {
  
     const [count, setCount] = useState(0)

     const incrument = () => {
       if(count < 100) {
         setCount(count + 1)
       }
       
     }

     if(count === 33 || count === 66 || count === 99) {
          audio.play();
     }
     
     setInterval(() => {
          if(count === 33 || count === 66 || count === 99) {
               audio.pause();
          }
     }, 3000)

     setInterval(() => {
          
     if(count === 99) {
          setCount(0)
          audio.pause();
     }
     }, 2000);


     const Clear = () => {
       setCount(0)
     }
   
     return (
       <div className='wrapper'>
          <div className="content">
               <h1>{count}</h1>
          </div>
          <div className="btn">
            <button onClick={Clear}>Clear</button>
            <button onClick={incrument}>Add</button>
          </div>
       </div>  
     )
}

export default Incrument