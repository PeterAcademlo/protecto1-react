import React from 'react'

const Autor = ({autorRandom}) => {


  return (
    <main className="border">
      <p className='App__autor'>{autorRandom.author}</p>
    </main>
  )
}

export default Autor