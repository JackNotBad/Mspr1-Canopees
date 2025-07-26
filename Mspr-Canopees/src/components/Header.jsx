import Navbar from "../Navbar";
import Logo from "../assets/Accueil/logo-canopees.png"

export default function Header() {
  return (
    <header className="w-full h-125 text-[var(--light-white)]">
      <hero-section className="w-full h-125 bg-[url(./assets/Accueil/hero-bg.jpg)] bg-no-repeat bg-cover bg-fixed bg-position-[center_bottom_-10rem] absolute inset-0">
        <div className="absolute inset-0 bg-black/40">
          <Navbar />
          <h1 className="absolute top-30 right-45 flex justify-center p-4">Donnez vie à vos espaces verts</h1>
          <div className="absolute bottom-5 right-48 mb-4">
            <img src={Logo} alt="Logo de Canopees" className="h-22 w-auto" />
          </div>
        </div>
      </hero-section> 
    </header>
  );
}