import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../tmdb-api";
import MovieList from "../../components/MovieList/MovieList";


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        getTrendingMovies()
            .then(data => setMovies(data))
            .finally(() => setIsLoading(false))
        
    }, []);
    
    // console.log(movies);

    return (
            <div>
            <h2>Trending movies:</h2>
            {isLoading && <p>Loading...</p>}
            <MovieList movies={movies} />
            </div>
    )
}