import react,{useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Dehradun");

    useEffect ( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7938d9005e68d8b258a109c716436c91`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();

    },[search] )

return(
        <>
            <div className="box">
                <div className="inputData">
                <input
                type="search" 
                value={search}
                className="inputFeild" 
                onChange={ (event) => { setSearch(event.target.value) } } />
                </div>
             <input className="is"></input>
              
           {!city ? (
            <p className="errorMsg">Enter City Name</p>
           ) : (
            <div>
                <div className="info">
                <h2 className="location">
                <i className="fa-solid fa-street-view"> </i>{search}
                </h2>
                <h1 className="temp">
                {city.temp}
                </h1>
                <h3 className="tempmin_max">
                   Min : {city.temp_min} | Max : {city.temp_max}
                </h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
            ) }

            
            </div>
        </>
    ) 
}

export default Tempapp;
