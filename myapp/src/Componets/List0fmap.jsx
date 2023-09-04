import React from 'react'

function List0fmap() {
  const IPL=["CSK", "RCB", "MI","GUJRAT","CSK"]
  // const li=[
  //   {
  //     id:"1",
  //     name:"shubham"
  //   },
  //   {
  //     id:"2",
  //     name:"sujal"
  //   }
  // ]
  return (
    <div>
      <h1>List of map</h1>
      {
        IPL.map((ipl,index)=><h1 key={index}>{ipl}, index is {index}</h1>)
      }
    </div>
  )
}

export default List0fmap
