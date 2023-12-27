import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './assets/Body/Body.jsx'
import Footers from './assets/Footer/Footers.jsx'
import Headers from './assets/Header/Headers.jsx'

function App() {

  return (
   <>
   <Headers/>
   <Body/>
   <Footers/>
   </>
  )
}

export default App
