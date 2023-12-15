import * as moviesapi from './movies-api'

export async function getMovies(){
    try{
        const data = await moviesapi.movieIndex()
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}