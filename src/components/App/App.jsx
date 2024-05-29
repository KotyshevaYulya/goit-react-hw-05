import {Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function App() {
    return (
        <div>
            <h1>Routing in react</h1>
            <Navigation />
             
        <Routes>
                <Route path="/" element={<div>Home page</div>} />
                <Route path="/payment" element={<div>Payment page</div>} />
                <Route path="/profile" element={<div>Profile page</div>} />
        </Routes>
        </div>
    );
}