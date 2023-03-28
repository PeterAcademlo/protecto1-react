import './App.css'
import quotes from './utils/phrases.json'
import Button from './components/Button'
import Quote from './components/Quote'
import Autor from './components/Autor'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'

const imgs = [1, 2, 3, 4]

function App() {
  
  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))
  const [autorRandom, setAutorRandom] = useState(getRandomArray(quotes))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))

  const appStyle = {
    backgroundImage: `url('/backgrounds/fondo${numberImg}.jpg')`
  }

  return (
    <div style={appStyle} className="App">
      <div className='container'>
      <h1 className='App__title'>GALLETAS DE LA FORTUNA</h1>
      <Button setQuoteRandom={setQuoteRandom} 
      setAutorRandom={setAutorRandom} 
      setNumberImg={setNumberImg}/>
      <Quote quoteRandom={quoteRandom} />
      <Autor autorRandom={autorRandom} />
      </div>
    </div>
  )
}

export default App
