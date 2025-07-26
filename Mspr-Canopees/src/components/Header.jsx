import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Logo from "../assets/Accueil/logo-canopees.png"

export default function Header() {
  const location = useLocation();
  const titles = {
    "/": "Donnez vie à vos espaces verts",
    "/about": "Qui sommes-nous",
    "/prestations": "Nos prestations",
    "/tarifs": "Nos tarifs",
    "/contact": "Contactez-nous",
    "/cgu": "Conditions d'utilisation",
    "/cgv": "Conditions générales de vente",
    "/mentions": "Mentions légales",
  };
  const title = titles[location.pathname] || "Canopées";

  return (
    <header className="w-full h-125 relative text-[var(--light-white)]">

      <hero-section className="w-full h-125 z-10 bg-[url(./assets/Accueil/hero-bg.jpg)] bg-no-repeat bg-cover bg-fixed bg-position-[center_bottom_6rem] absolute inset-0">
        <div className="absolute inset-0 bg-black/40">
          <Navbar />
          <h1 className="absolute top-30 right-45 flex justify-center p-4">{title}</h1>
          <div className="absolute z-1 bottom-5 right-48 mb-4">
            <img src={Logo} alt="Logo de Canopees" className="h-22 w-auto" />
          </div>
          <div
            className="
              absolute bottom-0 left-0
              w-[90%] h-48
              bg-gradient-to-r from-[var(--green)] to-[var(--orange)]
              z-0
              [clip-path:polygon(0%_0%,90%_0%,100%_100%,0%_100%)]
            "
          >
      </div>
        </div>
      </hero-section> 
    </header>
  );
}