import config from'../config/config.jsx' 

export async function movieIndex(){
    const apiKey = 'a3e4c054'
    // const res = await fetch(config.BASE_URL, {method:"GET"})
    const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${'Inception'}`)
    if(res.ok){
        return res.json()
    }else if(Error){
        console.log(Error)
        throw new Error("Invalid Request")
    }
}
 
