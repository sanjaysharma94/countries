
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import uuid from 'react-uuid';



export const Home = () =>{
    
    const [data, setData] = useState([])
    const [url , setUrl] = useState("https://restcountries.com/v3/all")
    const Navigate  = useNavigate();
    

    // function to make api call
    const makeCall = url =>{

        axios.get(url)
        .then((res)=>{
            setData(res.data)
        })
        .catch((e)=>alert(e.message));
    }




    // useEffect to make api call with url as dependency
    useEffect(()=>{

        makeCall(url)
       
    },[url])



    // search for a country
    const handleSearch = (e)=>{

        if(e.key==='Enter'){
            setUrl(`https://restcountries.com/v3/name/${e.target.value}`)
        }

        
    }

   
    
    // filter function 
    const handleChange = (e)=>{
            if(e.target.value ==="None") setUrl("https://restcountries.com/v3/all");
            else setUrl(`https://restcountries.com/v3/region/${e.target.value}`) ;        
    }




        //  Appending countries from Response  using map function 
    const render = () =>
    <div id="main-div">
            {data.map((el)=><div key={uuid()} onClick={()=>Navigate(`/details/${el.name.official}`)} className="per-Div" >
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



    // Elements Returning  from Home components .
    return(<div id="container">

        <div id="search-filter">

         <input type="text" onKeyPress={handleSearch} placeholder= 'Search for a Country' /> {/* input box for search */}

            <select onChange={handleChange}>
            <option value="None">Filter by Region</option>  {/*  select tag for filter options  for search */}
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
 
