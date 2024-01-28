import { useState } from 'react'
import './App.css'

function App() {
   return (
    <>
    <div className='Toucher' onClick={() => {
        document.querySelector('video')?.classList.toggle('TouchMe');
        setTimeout(() => {
          document.querySelector('video')?.classList.toggle('TouchMe');
        }, 1000)
       }}>
       </div>
    </>
  )
}

export default App
