import React from 'react'
import Child from './Child'
//listing state up or pass data from chlid to parent  

function LiftingSate() {
    function getData(data){
        console.log(data);
    }
  return (
    <div>
        Lifiting
        <Child getData={getData}/>
    </div>
  )
}

export default LiftingSate
