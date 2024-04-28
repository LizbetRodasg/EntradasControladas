import { useState } from 'react'

function App() {
  const [miTexto, setSuTexto] = useState("")

  const handleText = (event) => {
    setSuTexto(event.target.value)
  }

  return (
    <>
       <div>
            Capturar texto
          </div>
          <input value={miTexto} onChange={handleText}/>
          <h3>Texto Capturado:</h3>
          <p>
            {miTexto}
          </p>
    </>
  )
}

export default App