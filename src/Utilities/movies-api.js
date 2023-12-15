import config from'../config/config.jsx' 

export async function movieIndex(){
    const res = await fetch(config.BASE_URL, {method:"GET"})
    if(res.ok){
        return res.json()
    }else if(Error){
        console.log(Error)
        throw new Error("Invalid Request")
    }
}
 