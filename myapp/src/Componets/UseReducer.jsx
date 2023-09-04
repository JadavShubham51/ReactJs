import React, { useReducer } from 'react'

const initialstate=0;
const reducer =(state,action)=>{
    switch(action){
        case "Increment":
            return state+1;
        case "decrement":
            return state-1;
        case "zero":
            return initialstate;
        default:
            return state;
    }

}

function UseReducer() {
   const [count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
        <h1>Count = {count}</h1>
      <button onClick={()=>dispatch("Increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("zero")}>decrement</button>
    
    </div>
  )
}

export default UseReducer
