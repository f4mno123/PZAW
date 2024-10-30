
import posts from '../posts.json'
import { useEffect, useState } from 'react';
import ComponentToDisplay from './ComponentToDisplay';



function DisplayComponents() {

    const [sliderValue, setSliderValue] = useState(0);
    const [postCopy, setPostCopy] = useState(posts);

    const handleSlide = (event) => {
      setSliderValue(event.target.value)
      setPostCopy(posts.slice(0, event.target.value))

    }

    return (
        <div>
            <input type="range" min="1" max="100" value={sliderValue} onChange={handleSlide} id="myRange"></input>
        
        <div className="App"> 
        

        {postCopy.map((element, index, array) => {
          if (element.id % 40 + 1 <= 9) {
            console.log(element.id)
            return <ComponentToDisplay title={element.title} image={`./icons/Icon14_0${element.id % 40 + 1}.png`} description={element.body} key={index}/>
          }
          else {
            console.log(element.id)
            return <ComponentToDisplay title={element.title} image={`./icons/Icon14_${element.id % 40 + 1}.png`} description={element.body} key={index}/>
          }
          
        })}
</div>
    
  
        
  
      </div>
    );

    
    
}


export default DisplayComponents;