import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import hamburger from "./assets/hamburger.svg"
import close from "./assets/close.svg"


export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-[var(--blue)]">
        <ul className={`${showMenu ? "flex" : "hidden"} flex-col items-center bg-[var(--blue)] w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-center`}>
            <li>
                <Link className="inline-block py-2 mx-4 text-lg text-[var(--light-white)] sm:py-0" to="/accueil">Accueil</Link>
            </li>
            <li>
                <Link className="inline-block py-2 mx-4 text-lg text-[var(--light-white)] sm:py-0" to="/about">Qui sommes-nous</Link>
            </li>
            <li>
                <Link className="inline-block py-2 mx-4 text-lg text-[var(--light-white)] sm:py-0" to="/prestations">Prestations</Link>
            </li>
            <li>
                <Link className="inline-block py-2 mx-4 text-lg text-[var(--light-white)] sm:py-0" to="/tarifs">Tarifs</Link>
            </li>
            <li>
                <Link className="inline-block py-2 mx-4 text-lg text-[var(--light-white)] sm:py-0" to="/contact">Contact</Link>
            </li>
        </ul>
        <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto sm:hidden"
        >
            <img 
            className="w-4"
            src={showMenu ? close : hamburger} alt={showMenu ? "Cacher le menu" : "Montrer le menu"} />
        </button>

    </nav>
  )
}