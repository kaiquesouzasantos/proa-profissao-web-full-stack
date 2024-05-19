import './MovieGalery.css'
import FilmCard from '../MovieCard/MovieCard'

export default function MovieGalery({ movies }) {
    return(
        <section className='galery'>
            {movies.map(
                movie => <FilmCard 
                    name={movie.title}
                    rate={movie.vote_average}
                    date={movie.release_date}
                    image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                />
            )}
        </section>
    )
}