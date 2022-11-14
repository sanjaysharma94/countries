import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import uuid from 'react-uuid';
import { useNavigate } from "react-router-dom";


export const Details = () =>{
    
    const [data, setData] = useState([])
    const  { name } = useParams();
    const Navigate = useNavigate()

   // useEffect to make api call with url as dependency
   useEffect(()=>{

    axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then((res)=>{
        setData(res.data)
    })
    .catch((e)=>console.log(e.message));


},[name])





   return <div style={{margin:"auto"}}>
    <button onClick={()=>Navigate("/")} style={{width:"100px",height:"30px",marginBottom:'20px'}}>Back</button>
   {data.map((el)=> <div key={uuid()} className="detail-container" >
     
   <div className="first-detail-subdiv"><img className="detail-Image " src={el.flags.png} alt="country" /></div>
   <div id="second-detail-subdiv">
   <h4>{el.name.common}</h4>
   <h5 className="highlight" >Population : </h5><span>{el.population}</span> 
   <h5 style={{marginLeft:"120px"}} className="highlight" >Top Level Domain : </h5><span>{el.tld[0]}</span>  <br/>
   <h5 className="highlight" >Native Name : </h5><span>{el.name.common}</span> 
   <h5 style={{marginLeft:"120px"}} className="highlight" >Languages : </h5>
    { Object.values(el.languages).map(e=><span key={e} style={{marginLeft:"3px"}}>{e}</span>)}  <br/>
   <h5 className="highlight">Region : </h5><span>{el.region}</span> <br/> 
   <h5 className="highlight">Sub Region : </h5><span>{el.subregion}</span> <br/>
   <h5 className="highlight">Capital : </h5><span>{el.capital}</span> <br />
   
   {el?.borders?.length>=1 && <h5  className="highlight">border countries:
   {el.borders.map((element,i) => { 
                                                             
                                        return(
                                            <span  className="bor"  key={element}>{el.borders[i]}</span>
                                        )
                                    })}
                </h5>
                            }
   </div>
   </div>
   )}
</div>
}