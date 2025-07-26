import { Link } from "react-router-dom";
import facebook from "../assets/Footer/facebook.svg"
import twitter from "../assets/Footer/twitter.svg"
import linkedin from "../assets/Footer/linkedin.svg"
import tiktok from "../assets/Footer/tiktok.svg"

export default function Footer() {
  return (
    <footer className="bg-[var(--blue)] text-[var(--orange)] p-4 text-center mt-10">
      <div className="flex mx-45">
        <h2 className="w-42 text-[var(--orange)!important]">canopées</h2>
        <ul className="flex-col items-center w-full absolute top-full pb-5 lg:flex lg:relative lg:flex-row lg:pb-0 lg:justify-center lg:space-x-6">
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
        <div className="w-42">
          <p className="text-[var(--orange)!important] ml-0">Social Media</p>
          <ul>
            <li className="inline-block w-6 mx-1"><img src={facebook} alt="Lien vers la page facebook" /></li>
            <li className="inline-block w-6 mx-1"><img src={twitter} alt="Lien vers la page twitter" /></li>
            <li className="inline-block w-6 mx-1"><img src={linkedin} alt="Lien vers la page linkedin" /></li>
            <li className="inline-block w-6 mx-1"><img src={tiktok} alt="Lien vers la page tiktok" /></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mx-45 my-5 ">
        <div className="
        w-300
        border-b-2 border-solid color-[var(--orange)] self-center">
        </div>
        <p className="text-[var(--orange)!important] mt-5">Canopées - 60, impasse de Valention, 28100 Barondan Tél: 0901313891</p>
        <p className="text-[var(--orange)!important] mt-2">© 2025 Canopées - Tous droits réservés</p>
        <div className="font-[Montserrat] underline space-x-4 mt-2">
          <Link to="/cgu">Conditions Générales d'Utilisation</Link>
          <Link to="/cgv">Conditions Générales de Ventes</Link>
          <Link to="/mentions">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}