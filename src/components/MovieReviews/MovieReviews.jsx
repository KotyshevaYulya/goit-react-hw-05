import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReview } from "../../tmdb-api";
import css from "./MovieReviews.module.css";

export default function MovieCoast() {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getMovieReview(movieId)
            .then(data => setReview(data))
            .catch(error => { console.log("Error") })
            .finally(() => setIsLoading(false))
    }, [movieId])
    
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {review.length > 0 ?
                (<ul>
                {review.map(({ author, content, id }) => (
                    <li key={id} className={css.reviewItem}>
                        <h4 className={css.autorTitle}>{author}</h4>
                        <p>{content}</p>
                    </li>
                ))}
                </ul>)
                :
                (<p>We don't have any reviews for this moment</p>)
                }
            </div>
    )
}