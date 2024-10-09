
import React, { useState, useRef } from 'react';

function Form () {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [dropdown, setDropdown] = useState("");
    const [radio, setRadio] = useState("");
    const firstRef = useRef();
    const secondRef = useRef();
    const dropdownRef = useRef();
    const radioRef = useRef();

    function onSelect(color) {
        setRadio(color);
    }

    function handleChangeBackground() {
        if (radio === "Blue") {
            document.body.style.backgroundColor = "blue";
        } else if (radio === "Green") {
            document.body.style.backgroundColor = "green";
        } else if (radio === "Red") {
            document.body.style.backgroundColor = "red";
        } else if (radio === "Pink") {
            document.body.style.backgroundColor = "pink";
        }
    }



    return (
        <form >
            <input ref={firstRef} type="text"  placeholder="Bla bla bla..." required onChange={(event) => {
                setFirst(event.target.value);
            }}/>

            <br/>

            <input ref={secondRef} type="text" placeholder="Bla bla bla..."required onChange={(event) => {
                setSecond(event.target.value);
            }} />
                
            <br/>

            <select ref={dropdownRef} onChange={(event) => {
                setDropdown(event.target.value);
                console.log(event.target.value);
            }}>
                <option value="GPU">GPU</option >
                <option value="CPU">CPU</option>
                <option value="RAM">RAM</option>
            </select>

            <br/>


            
            <fieldset ref={radioRef}>
            <input type="radio" name="radbut" radioGroup='group' value={"Blue"}required onClick={() => {
                onSelect("Blue");
            }}/>
            <label>Blue</label>
            <br/>
            <input type="radio"  name="radbut"  value={"Green"}required onClick={() => {
                onSelect("Green");
            }} />
            <label>Green</label>
            <br/>
            <input type="radio"  name="radbut" radioGroup="group" value={"Red"}required  onClick={() => {
                onSelect("Red");
            }}/>
            <label>Red</label>
            <br/>
            <input type="radio"  name="radbut" radioGroup="group" value={"Pink"} required onClick={() => {
                onSelect("Pink");
            }}/>
            <label>Pink</label>
            </fieldset>
            <br/>

            <br/>

            <input type="button" value={"submit"} onClick={() => {

                console.log(second);
                console.log(dropdown);
                console.log(radio);
                console.log(first);

                handleChangeBackground();
            }}/>
            <input type="button" value={"clear"} onClick={() => {
                setFirst("");
                setSecond("");
                setDropdown("");
                setRadio("");
                firstRef.current.value = "";
                secondRef.current.value = "";
                dropdownRef.current.value = "";
                radioRef.current.value = "white";


            } }/>
    
            <div>
                <p>First: {first}</p>
                <p>Second: {second}</p>
                <p>Dropdown: {dropdown}</p>
                <p>Radio: {radio}</p>
            </div>    
        </form>


                
    );
}

export default Form;