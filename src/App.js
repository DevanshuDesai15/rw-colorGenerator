import React, {useState} from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {

  const [color, setcolor] = useState('');
  const [error, seterror] = useState(false);
  const [clrlist, setClrlist] = useState(new Values('#f15025').all(5));

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    try{
      let colors = new Values(color).all(5)
      // console.log(colors);
      setClrlist(colors);
      
    }catch (error){
        seterror(true)
        console.log(error);
    }
  }


  return (
    <>
      <section className="container">
        <h3>Color Generator: </h3>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder="Enter # value, eg. #26h7b2" className={`${error ? 'error' : null}`} value={color} onChange={(e)=> setcolor(e.target.value)}/>
          <button className="btn" type="submit">Show</button>
        </form> &nbsp; &nbsp; &nbsp; 
          <h4>** CLick on the colors to get the HEX code... **</h4>
      </section>
      <section className="colors">
        {clrlist.map((color,index)=>{
          return <SingleColor key={index} {...color} index={index}/>
        })}
      </section>
    </>
  );
}

export default App;
