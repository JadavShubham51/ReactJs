import React, { useState } from 'react'

function TodoList() {
    const [activity, setactivity] = useState("")
    const [list,setlist]=useState([]);
    function addctivity(){
        // setlist([...list,activity])
        // console.log(list);
        setlist((list)=>{
            const updatelist = [...list,activity]
            console.log(updatelist);
            setactivity("");
            return updatelist;
        })
    }
    function remove(index){
        const upadatedata = list.filter((elem,id)=>{
            return index!=id;
        })
        setlist(upadatedata);
        
    }
    function removeall(){
        setlist([])
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className='header'>TODO LIST</div>
                    <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setactivity(e.target.value) } />
                    <button onClick={addctivity}>Add</button>

                    <p className='List-heading'>Here is your list: {")"}</p>
                    {
                        list!=[] && list.map((data,index)=>{
                            return(
                                <>
                                    <p key={index}>
                                        <div className='listData'>{data}</div>
                                        <div className='btn-position'>
                                        <button onClick={()=>remove(index)}>Remove(-)</button>
                                        </div>
                                        
                                    </p>
                                </>
                            )
                        })
                    }
                    {list.length>=1 && <button onClick={removeall}>Remove all</button>}
                    
                </div>
            </div>
        </>
    )
}

export default TodoList
