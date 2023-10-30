import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";
import ResultadoClima from "./ResultadoClima";
import Form from "./Form";


const Main = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [resultado, setResultado] = useState({});
  const [error, guardarError] = useState(false);

  useEffect(() => {
    if (ciudad === "") return;

    const llamadoApi = async () => {
      const appiId = "6ba599b24bd57e72a559ae1c28c460a7";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appiId}`;
      const response = await fetch(url);
      const data = await response.json();

      setResultado(data);
    };

    llamadoApi();
  }, [ciudad, pais]);

  const datosLlamado = (datos) => {
    if (datos.ciudad === "" || datos.pais === "") {
      guardarError(true);
      return;
    }

    setCiudad(datos.ciudad);
    setPais(datos.pais);
    guardarError(false);
  };

  let componente;
  if (error) {
    componente = <Error mensaje="Ambos campos son obligatorios" />;
  } else if (resultado.cod === "404") {
    componente = <Error mensaje="La ciudad no existe" />;
  } else {
    componente = <ResultadoClima resultado={resultado} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
    <Form datosLlamado={datosLlamado} componente={componente} />
  </div>
  );
};

export default Main;
