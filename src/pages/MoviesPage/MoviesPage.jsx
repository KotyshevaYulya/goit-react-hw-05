import { useEffect, useState } from "react";
import { getMoviesByTitle } from "../../tmdb-api";
import { useSearchParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MoviesPage() {
    const location = useLocation(); 
    
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const movieFilter = searchParams.get('name') ?? '';

    const changeMovieFilter = (newFilter) => {
        if (newFilter === '') {
            searchParams.delete('name')
            setSearchParams(searchParams);
        } else {
            searchParams.set('name', newFilter);
            setSearchParams(searchParams);
        }
    }

    useEffect(() => {
        getMoviesByTitle(movieFilter)
        .then(data => setMovies(data))
    }, [movieFilter]);

    return (
        <div>
            <p>Let's search</p>
            <input type="text" value={movieFilter} onChange={e => changeMovieFilter(e.target.value)} />
            {movies && <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={location}>
                            <p>{movie.original_title}</p>
                        </Link>
                    </li>
                ))}
            </ul> }
        </div>
    )
}