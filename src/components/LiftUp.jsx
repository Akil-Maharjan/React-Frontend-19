import { useState } from "react";


//Lifiting State Up if you want to use the same state in multiple components

const LiftUp = () => {
    const [text, setText] = useState("");
  return (
     <>
       <Input value={text} onChange={(text) => setText(text) } />
       <Display text={text} />
     </>
  )
}
function Input({text, onChange}){
    return (
        <input type="text" value={text} onChange={(e)=> onChange(e.target.value)} />
    )
}

function Display({text}){
    return (
        <h1>You Typed:{text}</h1>
    )
}

export default LiftUp