import {useState ,useEffect} from "react";
import axios from "axios";
import "./App.css";

const App=()=>
{
  const [data,setmyData]=useState([])

  const apikey ="ecb1f8934e6510b03b74958bb4396cc9"

  const [inputCity,setCity]=useState("")
  
  const getWeather=(cityName)=> {
    if(!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ apikey
    axios.get(apiURL).
    then((res)=>{console.log("response",res.data)
    setmyData(res.data)
  }).catch((err)=>{console.log("err",err)})}

  const handleChangeInput=(e)=>{
  setCity(e.target.value)
      
  }
  const handleSearch=()=>{
    getWeather(inputCity)
      
  }
    useEffect(()=>{
      getWeather("bhopal")
    },[])

    
  
  return(
    <div className="col-md-12">
      <div className="weatherBg">
      <h1 className="heading">Weather App </h1>
      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" className="from-control" onChange={handleChangeInput}/>
      <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
      </div>
     
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img className="icon"src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0"/>
          <h4 className="weatherCity">{data?.name}</h4>
          <h6 className="CityTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        

        </div>
      </div>
    </div>
    </div>
    
    );
}
export default App;