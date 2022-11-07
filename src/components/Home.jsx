
import useFetch from "./Fetch"


export const Home = () =>{

    const data= useFetch("https://restcountries.com/v3/all");
    console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ ̥",data.data)
    return(
        <div></div>
    )
}
 
