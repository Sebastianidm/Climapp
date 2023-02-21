import React from 'react'
import { useState } from 'react'

function Form({datosLlamado, componente}){


    const [ busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
       
    })

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }
    
    const consultarClima = e => {
        e.preventDefault()
        datosLlamado(busqueda)
    }

  return (
    <div className="flex flex-col items-center py-12">
      <main className=" flex flex-col w-2/6 my-16 h-96 py-2 text-center bg-white  border-solid  border-purple-600  border-4 rounded-2xl items-center">
       
        <h1 className="py-5 text-xl">App clima </h1>

        <form onSubmit={consultarClima}>
          <input
            type="text"
            name='ciudad'
            id='ciudad'
            placeholder="Escribe una ciudad"
            className=" m-1 text-center "
            onChange={handleChange}
          />
          
          <select
          onChange={handleChange}
          name='pais' 
          placeholder="selecciona pais">
            <option  selected="true" disabled="disabled"  value="Seleccione un pais">Selecciona país</option>
            <option value="CL">Chile</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="BR">Brasil</option>
            <option value="CR">Costa Rica</option>
            <option value="CU">Cuba</option>
            <option value="EC">Ecuador</option>
            <option value="PY">Paraguay</option>
            <option value="PR">Puerto Rico</option>
            <option value="GT">Guatemala</option>
            <option value="HN">Honduras</option>
            <option value="NI">Nicaragua</option>
            <option value="PA">Panama</option>
            <option value="DO">Republica</option>
            <option value="URY">Uruguay</option>
          </select>
          <div >
                <input 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-3'
                type="submit" 
                value="Buscar CLima"/>
            </div>
        </form>
        <div >
        {componente}
        </div>

      </main>
    </div>
  )
}

export default Form