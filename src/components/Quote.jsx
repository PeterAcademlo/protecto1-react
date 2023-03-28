import React from "react"

const Quote = ({quoteRandom}) => {

    console.log(quoteRandom)

  return (
    <p className="App__quote">{quoteRandom.phrase}</p>
    
  )
}

export default Quote