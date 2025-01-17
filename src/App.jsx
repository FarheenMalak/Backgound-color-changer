import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const handleColorChange = (event) => {
    setBgColor(event.target.value)
  };

  return (
    <div className="container" style={{backgroundColor : bgColor}}>
      <h1>Background Color Changer</h1>
         <select onChange={handleColorChange} className="dropdown" >
             <option value="white">White</option>
             <option value="lightblue">Light Blue</option>
             <option value="pink">Pink</option>
             <option value="lavender">Lavender</option>
             <option value="lightgreen">Green</option>
             <option value="purple">Purple</option>
             <option value="lightcoral">Coral</option>
             <option value="yellow">Yellow</option>
         </select>
    </div>
  );
}

export default App;

