import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "../../tmdb-api";
import css from "./MovieCast.module.css";

export default function MovieCoast() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getMovieCast(movieId)
            .then(data => setMovie(data))
            .catch(error => { console.log("Error") })
            .finally(setIsLoading(false))
    }, [movieId])

    return (
            <div className={css.castContainer}>
            {movie && <ul className={css.castList}>
                {movie.map(({ character, name, profile_path,id }) => (
                    <li key={id}>
                        <div className={css.castImgContainer}>
            <img className={css.castImg} src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
                                alt="Movie poster" />
                        </div>
                        
                        <h3>Name:</h3>
                        <p>{name}</p>
                        <h3>Character:</h3>
                        <p>{character}</p>
                    </li>
                ))}
            </ul> }
            </div>
    )
}