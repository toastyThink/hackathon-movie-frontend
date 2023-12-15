

import '../App/App.css'

import {useState, useEffect} from 'react'

import {getMovies} from '../../utilities/movies-service.js'
import MovieForm from './MovieForm.jsx'

//take list from api 

//dynamic option from api list -> put into form
function MovieList(props){
const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)

const handleRequest = async () =>{
    setLoading(true)
    const data =  await getMovies()
    if(data) setMovies(data)
    setLoading(false)
}


const renderMovies = () => {
    return(
        <>
            {/* <MovieForm getMovies={{getMovies}} /> */}
            <ul style={{listStyleType: 'none', paddingInlineStart: "0px"}}>
                {movies?.map((m) => (
                    <li style={{fontSize: "30px"}} key={m.id}>
                        <div>Title: {m.Title}</div>
                        <div>Year: {m.Year}</div>
                        <div>Type: {m.Type}</div>
                        <div> <img src={m.Poster} /></div>
                    </li>
                ))}
                
            </ul>
        </>
       
    )
}

const renderLoading = () =>{
    <h2>
        Your movie list is loading...
        <span>
             <img className="spinner" src="https://freesvg.org/img/1544764567.png" />
        </span>
    </h2>
}


useEffect( () => {
 handleRequest()
}, [])

        return(
                <>
                {loading ? renderLoading() : renderMovies()}
                </>
        )
}


export default MovieList