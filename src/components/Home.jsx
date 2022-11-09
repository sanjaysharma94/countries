
import axios from "axios";
import { useEffect, useRef, useState } from "react";



export const Home = () =>{
    const [filter, setFilter] = useState("None")
    const [search, setSearch] = useState("");
    const [data, setData] = useState([])

    const [url , setUrl] = useState("https://restcountries.com/v3/all")
    
    
     
    const makeCall = url =>{

        axios.get(url)
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
        .catch((e)=>console.log(e.message));
    }
    
    useEffect(()=>{

        makeCall(url)
       
    },[url])
    
    
    const handleChange = (e)=>{
            if(e.target.value ==="None") setUrl("https://restcountries.com/v3/all");
            else setUrl(`https://restcountries.com/v3/region/${e.target.value}`) ;        
    }

    const render = () =><div id="main-div">
    {data.map((el)=><div className="per-Div" >
            <img className="perImage" src={el.flags[1]} alt="country" />
            <h4  className="last-Div1">{el.name.common}</h4>
            <div className="last-Div">
            <p className="highlight" >Population : </p><span>{el.population}</span> <br />
            <p className="highlight">Region : </p><span>{el.region}</span> <br />
            <p className="highlight">Capital : </p><span>{el.capital}</span>
            </div>
        </div>
    )}
</div>
    return(<div id="container">

        <div id="search-filter">
        {/* <input type="text" placeholder="search for a country" />  */}
        <input type="text" placeholder="&#xF002; Search for a country" style={{fontFamily:"Arial"+ "FontAwesome"}} />
        <select onChange={handleChange}>
            <option value="None">Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>

        </select>
        </div>

        {render()}
        
        </div>
    )
}
 
