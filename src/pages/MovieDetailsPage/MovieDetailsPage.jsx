import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getMovieById } from "../../tmdb-api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export default function MovieDetailsPage() { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getMovieById(movieId)
            .then(data => setMovie(data))
            .catch(error => { console.log("Error") })
            .finally(setIsLoading(false))
    }, [movieId])

    return (
        <div>
            <p>look its {movieId}</p>
            <MovieDetails movie={movie}/>
        </div>
    )
}






// export default function MovieDetailsPage() {
//     const { movieId } = useParams();
//     const [isLoading, setIsLoading] = useState(false);
//     const [movie, setMovie] = useState(null);

//     const isFirstRender = useRef(true);

//     useEffect(() => {
//            if (isFirstRender.current) {
//         isFirstRender.current = false; 
//         return;
//     }
//         setIsLoading(true);
//         const getMovieDetails = async () => {
//             try {
//                 const data = getMovieById(movieId);
//                 setMovie(data);
//             } catch (error) {
//                 console.log("Error!!");
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         getMovieDetails();
//     }, [movieId]);

//     console.log(movie);

//     // !!!!!!!!!!!!!!!!!!!!!!!!

//     useEffect(() => {
//         setIsLoading(true);
//         getMovieById(movieId)
//             .then(data => { setMovie(data)})
//             .catch(() => { console.log(error); })
//             .finally(() => {
//                 setIsLoading(false)
//                 console.log(movie);
//             })
//     }, [movieId]);


//     const { original_title, overview, genres, poster_path } = movie;

//     return (
//         <div>
//             <p>Look</p>
//             <div>
//             <img src={
//               poster_path
//                 ? `https://image.tmdb.org/t/p/w300${poster_path}`
//                 : `http://www.suryalaya.org/images/no_image.jpg`
//             }
//                 alt="Movie poster" />
//             <p>Look {movieId}</p>
//             <h3>{original_title}</h3>
//             <h3>Overview</h3>
//             <p>{overview}</p>
//             <h3>Genres</h3>
//             <ul>
//                 {genres.map(({ id, name }) => (
//                     <li key={id}>{name}</li>
//                 ))}
//                 </ul>
//             </div>
            
//             {isLoading && <p>Loading...</p>}
//         </div>
//     )
// }