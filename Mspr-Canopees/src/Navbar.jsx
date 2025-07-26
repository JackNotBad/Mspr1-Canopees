import { useState } from "react"
import { Link } from "react-router-dom";
import hamburger from "./assets/hamburger.png"
import close from "./assets/close.png"


export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="absolute top-20 z-50 right-45 flex justify-center p-4">
        <ul className={`${showMenu ? "flex" : "hidden"} flex-col items-center w-full absolute top-full pb-5 lg:flex lg:relative lg:flex-row lg:pb-0 lg:justify-center lg:space-x-6`}>
            <li>
                <Link to="/" className="inline-block py-2 text-lg lg:py-0">Accueil</Link>
            </li>
            <li>
                <Link to="/about" className="inline-block py-2 text-lg lg:py-0">Présentation</Link>
            </li>
            <li>
                <Link to="/prestations" className="inline-block py-2 text-lg lg:py-0">Prestations</Link>
            </li>
            <li>
                <Link to="/tarifs" className="inline-block py-2 text-lg lg:py-0">Tarifs</Link>
            </li>
            <li>
                <Link to="/contact" className="inline-block py-2 text-lg lg:py-0">Contact</Link>
            </li>
        </ul>
        <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto lg:hidden"
        >
            <img 
            className="w-4"
            src={showMenu ? close : hamburger} alt={showMenu ? "Cacher le menu" : "Montrer le menu"} />
        </button>

    </nav>
  )
}