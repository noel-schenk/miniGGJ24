import { useState } from 'react';
import './App.css'
import confetti from 'canvas-confetti';

function App() {
   const [count, setCount] = useState(0);

   return (
    <>
    <div className='Toucher' onClick={() => {
      setCount(count +1)
        document.querySelector('canvas')?.classList.toggle('TouchMe');
        setTimeout(() => {
          document.querySelector('canvas')?.classList.toggle('TouchMe');
        }, 1000)
       }}>
       </div>

       {count > 4 && spawnConfetti() && <div>
          <img className='dead' src="/dead.jpg" />
        </div>}
    </>
  )
}

export default App


const spawnConfetti = () => {
  confetti();
  setInterval(() => {
    confetti();
  }, 2000)
  return true;
}