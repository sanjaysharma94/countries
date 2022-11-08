
import useFetch from "./Fetch"


export const Home = () =>{

    const {data,loading}= useFetch("https://restcountries.com/v3/all");
    console.log(loading)
    
    return(<div id="container">

        <div id="search-filter">
        <input type="text" /> 
        <select>
            <option value="">Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>

        </select>
        </div>
        <div id="main-div">
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
        </div>
    )
}
 
