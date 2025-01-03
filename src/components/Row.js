import React,{useState,useEffect} from 'react'
import instance from '../instance';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {
    
    const [movies,setMovies]=useState([]);

    async function fetchData() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results)
        
    }
useEffect(()=>{
     fetchData()
},[])

console.log(movies)

  return (
    <div className='row'>
        <h2>{title}</h2>


        <div className='posters'>
            {
             movies.map(movie=>(
                <img className='image'
                src={`${base_url}${movie.backdrop_path}`}
                alt={movie.name}
                />
             ))
            }
            
        </div>
    </div>
   
  )
}

export default Row