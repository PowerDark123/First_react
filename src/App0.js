import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0)
  const [isHappy, setisHappy] = useState("☺")
  const nev="Gyula"
  const piros={color:"red"}
  const zold={color:"green"}
  const handleMinus=()=>{
    counter>0 ? setCounter(counter-1) : setCounter(0)
  }
  const handleHappy=()=>{
    isHappy =="☺" ? setisHappy("😪") : setisHappy("☺")
  }
  return (
    <div className="container">
      <h1 >Első próba</h1>
      <h3>Üdv {nev} 👨🏾‍🤝‍👨🏻</h3>
      <div style={counter<10 ? piros:zold}>Számláló: {counter}</div>
      <button className='btn btn-primary m-2' onClick={()=>setCounter(counter+1)}>+</button>
      <Button variant='danger' onClick={handleMinus}>-</Button>
      <p>{counter>10 ? "😂":"😪"}</p>
      <button className='btn btn-success' onClick={handleHappy}>Kapcsoló: </button>
      <div className="happy">{isHappy}</div>
    </div>
  );
}

export default App;
