import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--mauve)] text-[var(--light-white)] p-4 text-center mt-10">
      <p>© 2025 Canopées - Tous droits réservés</p>
      <div className="space-x-4">
        <Link to="/cgu">CGU</Link>
        <Link to="/cgv">CGV</Link>
        <Link to="/mentions">Mentions légales</Link>
      </div>
    </footer>
  );
}