

import '../App/App.css'

import {useState, useEffect} from 'react'

import {getMovies} from '../../utilities/movies-service.js'

//take list from api 

//dynamic option from api list -> put into form
function MovieList(){
const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)

const handleRequest = async () =>{
    setLoading(true)
    const data =  await getMovies()
    if(data) setMovies(data)
    setLoading(false)
    console.log(movies)
}


const renderMovies = () => {
    return(
        <form>
        <select style={{ margin:'20px', width: "100px", height: "50px", fontSize:"20px", borderRadius: "5px"}}>
            <option>Title</option>
            <option>Release Date</option>
            <option>Genre</option>
            <option>Director</option>
            <option>Actor</option>
        </select>
        <button type="submit" style={{margin:'20px', fontSize:"20px"}}>Submit</button>

        
            <ul style={{listStyleType: 'none', paddingInlineStart: "0px"}}>
                
                    <li style={{fontSize: "30px"}} key={movies.id}>
                        <div>Title: {movies.Title}</div>
                        <div>Rating: {movies.imdbRating}</div>
                    </li>
            </ul>
        </form>
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