import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="bg-[var(--blue)] text-[var(--light-white)] p-4 flex justify-between items-center">
      <nav>
        <Navbar />
      </nav>
    </header>
  );
}