import React, { useEffect, useState } from 'react';
import Search from './Search';
import './style.css'


export default function WeatherApp({url}){
    const [weatherData, setWeatherData] = useState([]);
    const [param, setParam] = useState('Mumbai');
    const [loading, setLoading] = useState(false)
    const [error, setError]  = useState(false)


    async function fetchData(){
        try{
        setLoading(true)
        setError(false)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);
        const data = await response.json()
        
        if(response.ok){
            setWeatherData([data]);
        }else{
            setWeatherData([]);
            setError(true)
        }
        
        setLoading(false);
    }catch(e){
        setLoading(false)
        setError(true)
        setWeatherData([])
        console.log(e)
    }
}


useEffect(()=>{
        fetchData();
    },[url, param])

    // console.log(weatherData)
    // console.log(param)

    function handleOnClick(val){
        setParam(val)
       
    }


    return(
    <div className='weatherContainer border border-black w-2/5 h-4/5 pt-5 pb-5 rounded-lg'>
        {/* <div className="text-4xl text-center text-white mt-5">Weather App</div> */}
        <div className='text-center mt-5'>
            <Search OnClick = {handleOnClick}/>
        </div>

        <div className='text-center mt-5'>
            
            {
                error ? <div>There was an error loading your data</div>:null
            }
        </div>
        <div>
            {console.log("Weatherdata length",weatherData.length)}
           {
           
                weatherData && weatherData.length ?
                weatherData.map((dataItem, index)=>{
                    return(
                      
                        <div key={index} className='w-full'>
                            <div className="cityName text-4xl text-center mt-4 font-semibold text-white">
                                {dataItem.name}
                            </div>
                            <div className="temp text-center text-2xl text-white">{Math.floor(dataItem.main.temp-273.15)}°</div>

                            <div className="weather-details grid grid-cols-2  gap-12 mt-10 px-14">

                                <div className="humidity border border-white flex flex-col justify-center items-center py-6">
                                    <div><img src="humidity.png" className='h-8' alt="humidity" /></div>
                                    <div className='text-white font-semibold'>Humidity</div>
                                    <div className='text-white'>{dataItem.main.humidity}</div>
                                </div>

                                <div className="pressure border border-white flex flex-col justify-center items-center py-6">
                                    <div><img src="atmospheric.png" className='h-8' alt="humidity" /></div>
                                    <div className='text-white font-semibold'>Pressure</div>
                                    <div className='text-white'>{dataItem.main.pressure}</div>
                                </div>

                                <div className="windSpeed border border-white flex flex-col justify-center items-center py-6">
                                    <div><img src="wind.png" className='h-8' alt="humidity" /></div>
                                    <div className='text-white font-semibold'>Windspeed</div>
                                    <div className='text-white'>{dataItem.wind.speed}</div>
                                </div>

                                <div className="visibility border border-white flex flex-col justify-center items-center py-6">
                                    <div><img src="eye.png" className='h-8' alt="humidity" /></div>
                                    <div className='text-white font-semibold'>Visibility</div>
                                    <div className='text-white'>{dataItem.visibility}</div>
                                </div>


                            </div>


                        </div>

                    )
                })
                :null
           }
        </div>
    </div>
);
}

