import './App.css'
import './index.css'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hidde, show } from '../src/menuSlice.js'

function App() {
  const [seleccion, setSeleccion] = useState("")

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  const handleChange = (event) => {

    const eleccion = event.target.value;
    setSeleccion(eleccion);
  }

  const handleClose = () => {

    dispatch(hidde());
  }

  const handleClick = () => {

    if (menu === "open") {
        
        dispatch(hidde());
    } else {
        
        dispatch(show());
    }
  }

  return (
    <div className='w-2/3 m-auto flex flex-col gap-8'>

      <select
          onChange={handleChange}
          value={seleccion}
          className='w-full p-3 rounded-lg'>
        <option value="enero">Enero</option>
        <option value="febrero">Febrero</option>
        <option value="febrero">Marzo</option>
        <option value="marzo">Abril</option>
        <option value="abril">Mayo</option>
        <option value="junio">Junio</option>
        <option value="julio">Julio</option>
        <option value="agosto">Agosto</option>
        <option value="septiembre">Septiembre</option>
        <option value="octubre">Octubre</option>
        <option value="noviembre">Noviembre</option>
        <option value="diciembre">Diciembre</option>
      </select>

      <button
          onClick={handleClick}
          className='w-full p-3 bg-lime-500 rounded-lg hover:bg-lime-600 text-xl text-white font-bold'>
        Elegir 
      </button>

      <section className={`w-full h-[250px] p-3 flex flex-col border-2 border-lime-500 rounded-lg text-4xl text-white ${menu}`}>
        <span className='m-auto'>El mes elegido es {seleccion}!</span>
        <button className='w-[60px] h-[60px] mx-auto bg-red-300 rounded-full' onClick={handleClose}>❌</button>
      </section>

    </div>
  )
}

export default App
