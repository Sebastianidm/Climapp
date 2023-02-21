import React from 'react';


function ResultadoClima({resultado}) {

    //extraer los valores
    const {name, main, weather } = resultado;
    console.log(weather)
  
    if(!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;

  

    return (
        <div  className='mh-100'>
            <div  className='text-base italic'>
                <h2>El clima de {name} es: </h2>
                <p>
                    { parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>
                <p>temperatura Máxima : { parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p>temperatura Minima : { parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>    
                {weather.map( (e ) => {
                 return (
                    <div key={e.id} className='  grid  justify-items-center content-center items-center grid-rows-1  grid-cols-3'>
                    <h3>{e.main}</h3> 
                    <h4>{e.description}</h4>
                    <img src={` http://openweathermap.org/img/wn/${e.icon}@2x.png`} alt="icon "  className='-order-1' />
                    </div>
                   
                
                 )

                } )}
                

            </div>
        </div>
    )
}

export default ResultadoClima;