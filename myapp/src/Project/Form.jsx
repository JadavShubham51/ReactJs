import React, { useEffect, useState } from "react";

function Form() {
    const data = { name: "", email: "", password: "" };
    const [inputdata, setinputdata] = useState(data);
    const [flag,setflag]=useState(false);
    useEffect(()=>{
        console.log("register");
    },[flag])
    function handaledata(e){
        setinputdata({...inputdata,[e.target.name]:e.target.value})
        console.log(inputdata);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputdata.name || !inputdata.email || !inputdata.password){
            alert("plc flied data")
        }
        else{
            setflag(true)
        }
    }
    return (
        <div>
            <pre>{(flag)?<h2 className="ui-define">hello {inputdata.name},you've Registered successfully</h2>:""}</pre>
            <form className="container" onSubmit={handleSubmit}>
                <div className="header">
                    <h1>Registration Form</h1>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        name="name"
                        value={inputdata.name}
                        onChange={handaledata}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={inputdata.email}
                        onChange={handaledata}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={inputdata.password}
                        onChange={handaledata}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
