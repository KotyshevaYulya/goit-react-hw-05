import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
            <nav>
               <ul className={css.containerNavigation}>
                <li><NavLink to="/"
                    className={getLinkClass}
                >
                    Home
                </NavLink>
                </li>

                <li><NavLink to="/movies"
                    className={getLinkClass}
                >
                    Movies
                </NavLink>
                </li>
            </ul>
        </nav>
    )
}