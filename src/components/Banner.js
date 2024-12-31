import React, { useEffect, useState } from "react"
import instance from "../instance"
import './Banner.css'



function Banner({fetchUrl}) {
        
    const [movies,setMovies]=useState([]);

    async function fetchData() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results[Math.floor(Math.random()* request.data.results.length)])
        
    }
useEffect(()=>{
     fetchData()
},[])

function truncate(str,n){
  return str?.length>n?str.substr(0,n-1)+'...':str
}

console.log(movies)

  return (

   <header className="bannerHead"
    style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }}
    >
        <div className="banner_content">
            <h1 className="banner_title"> {movies?.name} </h1>
            <h4 className="banner_description"> {truncate(movies?.overview,150) }</h4>
        </div>
       
    </header>
  )
}

export default Banner