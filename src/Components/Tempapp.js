import react,{useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {
    var [city, setCity] = useState([]);
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
        const tptcity = resJson.main;
        const namecity = resJson.name;
        tptcity['name'] = namecity;
         setCity(tptcity);
      
        };
      
    
      const getAllCities = async() => {
        cities.map(city => getCity(city))
        
      }

    
      useEffect(() => {
        getAllCities();
      }, [cities]); 
    console.log(city)   
  
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
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                <div className="info">
                <h3 className="tempmin_max">Name : {city.name} | Temprature : {city.temp} </h3>
                </div> 
            </div>
            ) }
            </div>
        </>
    ) 
}

export default Tempapp;
