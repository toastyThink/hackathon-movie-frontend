import '../App/App.css'

import {getMovies} from '../../utilities/movies-service.js'

//take list from api 

//dynamic option from api list -> put into form

function submitMovie(){
    console.log('movie option submitted')
}



function MovieList(){
    return(
    <>
       <form onSubmit={submitMovie}>
            <select style={{ margin:'20px', width: "100px", height: "50px", fontSize:"20px", borderRadius: "5px"}}>
                <option>Title</option>
                <option>Release Date</option>
                <option>Genre</option>
                <option>Director</option>
                <option>Actor</option>
            </select>
            <button type="submit" style={{margin:'20px', fontSize:"20px"}}>Submit</button>
      

        <ul style={{listStyleType: 'none', paddingInlineStart: "0px"}}>
            <li style={{fontSize: "30px"}}>Movie One</li>
        </ul>
        </form>
    </>
    )
}

export default MovieList