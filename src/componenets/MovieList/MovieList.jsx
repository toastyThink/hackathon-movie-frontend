import '../App/App.css'

//take list from api 

//dynamic option from api list -> put into form

function submitMovie(){
    console.log('movie option submitted')
}



function MovieList(){
    return(
    <>
        <form onSubmit={submitMovie}>
            <select>
                <option>Title</option>
                <option>Release Date</option>
                <option>Genre</option>
                <option>Director</option>
                <option>Actor</option>
            </select>
            <button type="submit" style={{margin:'20px'}}>Submit</button>
      

        <ul>
            <li>Movie One</li>
        </ul>
        </form>
    </>
    )
}

export default MovieList