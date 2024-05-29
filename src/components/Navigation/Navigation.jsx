import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
    return (
            <nav>
               <ul>
            <li><NavLink to="/" className={() => {}}>Home</NavLink></li>
            <li><NavLink to="/payment">Payment</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </nav>
    )
}