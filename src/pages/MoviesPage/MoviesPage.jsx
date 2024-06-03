import { useEffect, useState } from "react";
import { getMoviesByTitle } from "../../tmdb-api";
import { useSearchParams} from "react-router-dom";
import toast, { Toaster }from 'react-hot-toast';
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const movieName = searchParams.get('name') ?? '';


    useEffect(() => {
        if (!movieName) return;
        setMovies([]);
        setIsLoading(true);
        const getMovieSearch = async (movieName) => {
            try {
                const data = await getMoviesByTitle(movieName);
                if (!data.length) { 
                    setError(true);
                    toast.error('There are no movies with this request. Please, try again');
                    return;
                }
                setMovies(data);
            } catch (error) {
                setError(true);
                console.log(error);
                toast.error("Whoops. Something went wrong! Please try reloading this page!");
            } finally {
                setIsLoading(false);
                setError(false);
            }
        };
        getMovieSearch(movieName);
    }, [movieName]);

    const changeMovieFilter = (newFilter) => {
        if (newFilter === '') {
            searchParams.delete('name')
            setSearchParams(searchParams);
        } else {
            searchParams.set('name', newFilter);
            setSearchParams(searchParams);
        }
    }


    const handleSubmit = e => {
        e.preventDefault();
        const searchForm = e.currentTarget;
        const newMovieName = searchForm.elements.movieName.value.trim();
        if (!newMovieName) {
            toast.error('Please enter a keyword!');
            return;
        }
        changeMovieFilter(newMovieName);
        searchForm.reset();
    }

    return (
        <div>
            <div>
                <Toaster
                position="top-right"
                reverseOrder={true}/>
            </div>
            <p>Let's search</p>
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='movieName'
                    placeholder='Enter the title to search'
                    autoComplete="off"
                    autoFocus
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                />
            <button type='submit'>Search</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {movies && <MovieList movies={movies} />}
            {error && <p>There is no movies with this request. Please, try again</p>}
        </div>
    )
}