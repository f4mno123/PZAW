import React, { useRef } from "react";

function Sci (){

    let inputRef = useRef();

    const buttonHandler = () => {
        console.log('hello world');
        console.log(inputRef);

    }

    const textHandler = (event) => {
        inputRef = event.target.value;
    }
    

    return (
        <div>
            <p>hdawdwa</p>
            <input type="button" value="dotknij mnie" onClick={buttonHandler}/>
            <input  ref={inputRef} type="text" defaultValue="wpisuj" onChange={textHandler} />
            
        </div>
    );
}

export default Sci;