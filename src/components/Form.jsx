import React from "react";
import { useState } from "react";

function Form({ datosLlamado, componente }) {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = (e) => {
    e.preventDefault();
    datosLlamado(busqueda);
  };

  return (
    <div className="container max-w-md bg-cyan-800 border border-gray-200 rounded-lg shadow p-8 mt-5 mb-5">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <form onSubmit={consultarClima} className="mt-5 space-y-5">
        <div className="sm:flex sm:justify-between">
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            placeholder="Escribe una ciudad"
            className="w-full sm:w-2/3 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-2 mb-2 mx-2"
            onChange={handleChange}
          />
          <select
            className="w-full sm:w-1/3 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-2 mb-2 mx-2"
            onChange={handleChange}
            name="pais"
          >
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
        </div>
        <div className="flex justify-center">
          <input
            className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-2 mb-2"
            type="submit"
            value="Buscar Clima"
          />
        </div>
      </form>
      <div className="flex justify-center text-center mb-2 mt-2 text-2xl tracking-tight text-white">
        {componente}
      </div>
    </div>
  );
}

export default Form;
