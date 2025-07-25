import Slider from "../components/Slider";
import Carousel from "../components/Carousel";

export default function Accueil() {
  return (
    <div>
      <Slider />
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Bienvenue chez Canopées</h2>
        <p>
          Nous créons et entretenons vos espaces verts pour particuliers,
          professionnels et collectivités.
        </p>
      </section>
      <Carousel />
    </div>
  );
}