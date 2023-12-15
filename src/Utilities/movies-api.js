import config from'../config/config.jsx' 
// import MovieForm from '../componenets/MovieList/MovieForm.jsx'



export async function movieIndex(movieSearch){
    const apiKey = 'a3e4c054'
    // const res = await fetch(config.BASE_URL, {method:"GET"})
    const res = await fetch(`https://mernstack-hackathon-a0902538855c.herokuapp.com/`)
    if(res.ok){
        return res.json()
    }else if(Error){
        console.log(Error)
        throw new Error("Invalid Request")
    }
}
 
