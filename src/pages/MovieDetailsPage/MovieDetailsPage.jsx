import { Outlet, useParams, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect,useState, useRef, Suspense } from "react";
import { getMovieById } from "../../tmdb-api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MovieCoast from "../../components/MovieCast/MovieCast";
import css from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage() { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation(); 
    const backLinkRef = useRef(location.state ?? "/movies ");


    useEffect(() => {
        setIsLoading(true);
        getMovieById(movieId)
            .then(data => setMovie(data))
            .catch(error => { console.log("Error") })
            .finally(setIsLoading(false))
    }, [movieId])

    return (
        <div>
            <button className={css.goBackBtn}><Link to={backLinkRef.current}>Go back</Link></button>
            {isLoading && <p>Loading...</p>}
            {movie && <MovieDetails movie={movie} />}
            <ul className={css.detailsList}>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li> 
                <li>
                    <NavLink to="review">Review</NavLink>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}