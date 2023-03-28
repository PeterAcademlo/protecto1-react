 import getRandomArray from "../utils/getRandomArray"
 import quotes from '../utils/phrases.json'

const Button = ({setQuoteRandom, setAutorRandom, setNumberImg}) => {

    const hanhleChangeQuote = () => {
        setQuoteRandom(getRandomArray(quotes))
        setAutorRandom(getRandomArray(quotes))
        setNumberImg(getRandomArray([1, 2, 3, 4]))
    }

  return (
    <button className="App__btn" onClick={hanhleChangeQuote}>probar mi suerte</button>
  )
}

export default Button