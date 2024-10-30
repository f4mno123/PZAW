import './App.css';
import { useState } from 'react';
import ComponentToDisplay from './Task1/ComponentToDisplay';
import DisplayComponents from './Task1/DisplayComponents';

function App() {

  const [sliderValue, setSliderValue] = useState(0);

  const handleSlide = (event) => {
    setSliderValue(event.target.value)
    console.log(event.target.value)
  }
  

  return (
    
    <DisplayComponents/>

    // <div className="App"> 
    //   <input type="range" min="1" max="100" value={sliderValue} onChange={handleSlide} id="myRange"></input>
    //   {posts.map((element, index, array) => {
        
    //     return <ComponentToDisplay title={element.title} image={`/icons/Icon14_${element.userId}.png`} description={element.description} key={index}/>
    //   })}

      

    // </div>

  );
}

export default App;