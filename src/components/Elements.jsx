import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export const Details = () =>{
    
    const [data, setData] = useState([])
    const  { name } = useParams();

   // useEffect to make api call with url as dependency
   useEffect(()=>{

    axios.get(`https://restcountries.com/v3/name/${name}`)
    .then((res)=>{
        setData(res.data)
    })
    .catch((e)=>console.log(e.message));


},[])

   return <div >
   {data.map((el)=> <div  id="detail-div main">
   <div className="first"><img className="detail-Image " src={el.flags[1]} alt="country" /></div>
   <div id="second-detail-div">
   <h4>{el.name.common}</h4>
   
   <p className="highlight" >Population : </p><span>{el.population}</span> <br />
   <p className="highlight">Region : </p><span>{el.region}</span> <br />
   <p className="highlight">Capital : </p><span>{el.capital}</span>
   
   </div>
   </div>
   )}
</div>
}