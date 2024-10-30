import React, { useState, useEffect } from "react";
import "./styles.css";

function NewComponent (){

    const myStyle = {
        color: "blue",
    }

    const [name, setName] = useState("Imie");
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("useEffect");
    }, []);
    

    return (
        <div className="byleco">
            {/* <p className="randomName">
                {name}
            </p> */}
            <div>
                <input type="text" onChange={(event)=> {
                    setName(event.target.value)
                    
                }}/>

            <input type="button" onClick={()=> {
                setCount(count + 1);
                                
                }}/>
            
                <p>{name}</p>
                <p>{count}</p>

                
                
            </div>
        </div>
    );
}

export default NewComponent;