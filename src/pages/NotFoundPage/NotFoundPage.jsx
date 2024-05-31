import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <p>Sorry, page not found! Pleas go to <Link to="/">Home page</Link></p>
    )
}