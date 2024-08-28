import { useState, useEffect} from 'react'
import './App.css'

function App() {

    const [number, setNumber] = useState(0)
    const [convert, setConvert] = useState(0)
    const [result, setResult] = useState(0)

    function handleNumber(event){
      setNumber(event.target.value)
    }

    function convertNumber (event) {
      setConvert(number);
      event.preventDefault();
      // conversion()
    }

    useEffect(() => {
      let output = [];
      let operation = convert;
      console.log(operation)
      while (operation > 1) {
        output.unshift(operation % 2)
        operation = Math.trunc(operation / 2)
        console.log(output)
        console.log(operation)

      };
      output.unshift(1)
      console.log(output)
      setResult(output)
    }, [convert])  

  return (
    <>
      <h1>Conversor decimal a binario</h1>
      <h2>Agrega un numero que quieras convertir</h2>
      <form action="number" >
        <input 
          type="number" 
          value={number}
          onChange={handleNumber}
        />
        <button onClick={convertNumber}>Convertir</button>
      </form>
      <div>{result}</div>
    

    </>
  )
}

export default App
