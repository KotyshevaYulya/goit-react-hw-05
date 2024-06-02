import css from "./MovieDetails.module.css";

export default function MovieDetails({ movie: { original_title, overview, genres, poster_path } }) {
    return (
        <div className={css.movieDetais}>
            
            <img src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
                alt="Movie poster" />
            <div>
            <h3>{original_title}</h3>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
                {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
                </ul>
                </div>
            </div>
    )
}