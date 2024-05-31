import {Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage"

export default function App() {
    return (
        <div>
            <h1>Routing in react</h1>
            <Navigation />             
        <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
                <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        </div>
    );
}