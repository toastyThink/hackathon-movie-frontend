import '../App/App.css'
import { useState, useEffect } from 'react'
import { getMovies } from '../../utilities/movies-service.js'
//import MovieForm from './MovieForm.jsx'

function MovieList(props) {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)

	const handleRequest = async () => {
		setLoading(true)
		const data = await getMovies()
		if (data) setMovies(data)
		setLoading(false)
	}

	const renderMovies = () => {
		return (
			<>
				{/* <MovieForm getMovies={{getMovies}} /> */}
				<ul>
					{movies?.map((m) => (
						<li key={m.id}>
							<div className="movie-details">
								<h2 className='title'>{m.Title}</h2>
								<p>
									<span>{m.Year}</span> ⋆ <span>{m.Type}</span>
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias sit odit quae, autem quasi aliquam ut distinctio consequatur quisquam dolorum aut eligendi quibusdam numquam eos! Enim, optio consequatur. Temporibus!</p>
							</div>
								<img src={m.Poster} alt={m.Title} />
						</li>
					))}
				</ul>
			</>
		)
	}

	const renderLoading = () => {
		;<h2>
			Your movie list is loading...
			<span>
				<img className='spinner' src='https://freesvg.org/img/1544764567.png' />
			</span>
		</h2>
	}

	useEffect(() => {
		handleRequest()
	}, [])

	return <>{loading ? renderLoading() : renderMovies()}</>
}

export default MovieList
