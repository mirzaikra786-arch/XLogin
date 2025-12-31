import {useState, useEffect} from "react";
import './App.css';


function App() {
  const [running,setRunning]=useState(false);
  const [elapsed,setElapsed]=useState(0);

  useEffect(() =>{
   let interval;
   if(running){
    interval=setInterval(()=>{
     setElapsed((pre)=> pre+1);
    },1000);
   }else{
    clearInterval(interval);
   }
  return ()=>clearInterval(interval);
  }, [running]);

  function start(){
    setRunning((prev)=>!prev);
  };

  function reset(){
    setRunning(false);
    setElapsed(0);
  }

  function time(second){
    const min=Math.floor(second/60);
    const sec= second%60;
    return `${min}:${sec<10 ? "0":""}${sec}`;
  }
  return (
    <div className="App">
      <h1 style={{fontFamily:"-apple-system",display:"flex",justifyContent:"flex-start", marginLeft:"10px"}}>Stopwatch</h1>
      <p>Time: {time(elapsed)}</p>
      <button onClick={start}>{running ? ("Stop"):("Start")}</button>
      <button onClick={reset}>Reset</button>
    </div>
 );
}

export default App;
