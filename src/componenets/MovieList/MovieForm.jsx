import { useState } from 'react'
import { getMovies } from '../../utilities/movies-service'

export default function Form() {
    const [input, setInput] = useState({
        search: ""
    })

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         getMovies(input.search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" onChange={handleChange} value={input.search} />
            <button type="submit">Search</button>
        </form>
    )
}