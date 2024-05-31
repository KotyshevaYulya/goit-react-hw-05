export default function MovieDetails({ movie: {original_title} }) {
    console.log(original_title);
    return (
        <div>
            <p>{original_title}</p>
        </div>
    )
}