import react,{useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    const [istru, setIstru] = useState(false);
    const [cities, setCities] = useState(["Delhi","Dehradun","Kotdwara","Pune"])
    var [tpt, setTpt] = useState(null);
    if(istru==false) 
    {
        
        setSearch(search.concat(cities))
        setIstru(true);
    }


    const getCity = async (search) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7938d9005e68d8b258a109c716436c91`;
        const response = await fetch(url);
        const resJson = await response.json();
        
        setTpt({[search]:resJson.name});
        const city = resJson.main;
      
        return city;
        };
      
    
      const getAllCities = async() => {
        cities.map(city => getCity(city))
      }
    
      useEffect(() => {
        getAllCities();
      }, [cities]);

return(
        <>
            <div className="box">
                <div className="inputData">
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
                {cities.temp}
                </h1>
                <h3 className="tempmin_max">
                   Min : {cities.temp_min} | Max : {cities.temp_max}
                </h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>


                <div className="info">
                <h2 className="location">
                <i className="fa-solid fa-street-view"> </i>{search}
                </h2>
                {tpt.map((city) => {
                return  <h3 className="tempmin_max">
                   Min : {city} | Max : {city}    
                </h3>
                })}
                </div>
            </div>

            
            ) }
            </div>
        </>
    ) 
}

export default Tempapp;
