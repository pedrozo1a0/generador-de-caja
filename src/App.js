
import { useState } from 'react';
import { Form } from './components/Form';
import { Square } from './components/Square';

function App() {

  const [colorsSquares, setColorsSquares]= useState([])
  return (
    <>
  <Form   colorsSquares={colorsSquares}
          setColorsSquares={setColorsSquares}  />
  <div className='container' >
  {colorsSquares.map((color, index)=>{
    return(
      <Square  key={index}
                color={color}/>
    )
    
  })}
  </div>
  </>
  );
}

export default App;
