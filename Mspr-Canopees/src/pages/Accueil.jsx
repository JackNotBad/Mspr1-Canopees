import Slider from "../components/Slider";
import Carousel from "../components/Carousel";

export default function Accueil() {
  return (
    <>
      <section id="about" className="box-content mx-auto lg:max-w-5xl">
        <img
          src="../src/assets/Accueil/passion-canopees.png"
          className="box-content object-cover h-auto"
          alt="part of the canopees team"
          width="440"
        />
        <div>
          <h2>Canopées, c’est avant tout une équipe de passionnés</h2>
          <p>Depuis 2020, Canopées entretiennent les jardins</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            lacus viverra, pretium metus et, condimentum leo. Sed lacus sapien,
            accumsan ut tellus vel, sollicitudin aliquam ligula. Donec ex metus,
            vehicula in magna eu, semper pulvinar felis. Curabitur elementum
            gravida leo, ut fringilla est placerat eu. Suspendisse potenti.
            Maecenas sapien justo, semper non finibus sit amet, elementum nec
            arcu. Phasellus vitae mi mollis, rhoncus ex aliquam, pulvinar sem.
          </p>
          <p>
            Praesent lorem lorem, placerat non orci a, faucibus posuere turpis.
            Nunc nec pharetra risus, vitae aliquam eros. Fusce venenatis nibh
            finibus, molestie tellus sed, gravida nisl. Quisque sit amet purus
            sagittis, mattis augue vitae, sodales erat. Fusce vel pellentesque
            erat. In ultrices, nunc ut tristique ultricies, libero nibh finibus
            nisi, ac faucibus velit velit et leo. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            dapibus pretium risus, id condimentum libero gravida efficitur.
            Aenean vestibulum interdum dui, vel molestie nunc blandit non.
            Maecenas vel facilisis arcu. Sed varius tristique ultricies. Nulla
            facilisi. Proin sit amet nunc non urna sodales finibus ut id leo.
            Fusce in mattis neque, nec gravida justo.
          </p>
        </div>
      </section>
      <section id="about" className="box-content mx-auto lg:max-w-5xl">
        <div>
          <h2>Particuliers, Professionnels, Collectivitées</h2>
          <p>
            Voici des exemples types de réalisations possibles :  
          </p>
          <p>
            Créations à la carte
          </p>
          <p>
            Valorisation des déchets verts
          </p>
          <p>
            Espaces communaux
          </p>
        </div>
        <Slider />
      </section>
      <Carousel />
    </>
  );
}
