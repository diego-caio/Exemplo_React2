import {useState} from 'react'

const Contador = () => {

      //Hook - Manipula o Estado da Variável
      const [contador,setContador]=useState(0);


  return (
    <>
    <h1>Contador Inicial: {contador}</h1>
    <button onClick={()=>setContador(contador +1)} >Aumentar</button>
    <button onClick={() => setContador(contador -1)} >Diminuir</button>
    </>
  )
}

export default Contador
