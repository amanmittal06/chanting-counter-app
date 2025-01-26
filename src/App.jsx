import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [totalRounds, setTotalRounds] = useState(0);
  
  function increseCount(){
    setCount(count+1);
  }

  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    const savedTotalRounds = localStorage.getItem('totalRounds');
    if (savedCount) {
      setCount(Number(savedCount));
    }
    if (savedTotalRounds) {
      setTotalRounds(Number(savedTotalRounds));
    }
  }, []);


  useEffect(()=>{
    localStorage.setItem('count', count);
    if(count===108){
      setCount(0);
      setTotalRounds(totalRounds+1);
    }
  }, [count])

  
  useEffect(()=>{
    localStorage.setItem('totalRounds', totalRounds);
  }, [totalRounds])


  return (
    

    <center className='container'>
      <center className='box'>
         <div className='count'>
          <button disabled className='countButton'>-</button>
          <div>{count}</div>
          <button className='countButton' onClick={()=>increseCount()}>+</button>
         </div>
         <div>Total rounds: {totalRounds}</div>
         <button className='resetButton'>Reset</button>
      </center>
    </center>
  )
}

export default App
