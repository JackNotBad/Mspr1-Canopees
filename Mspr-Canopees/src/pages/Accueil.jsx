import Slider from "../components/Slider";
import Carousel from "../components/Carousel";
import passionCanopees from "../assets/Accueil/passion-canopees.png"
import carousel1 from "../assets/Accueil/carousel/carousel1.png"
import carousel2 from "../assets/Accueil/carousel/carousel2.png"
import carousel3 from "../assets/Accueil/carousel/carousel3.png"
import carousel4 from "../assets/Accueil/carousel/carousel4.png"
import carousel5 from "../assets/Accueil/carousel/carousel5.png"
import carousel6 from "../assets/Accueil/carousel/carousel6.png"
import carousel7 from "../assets/Accueil/carousel/carousel7.png"

export default function Accueil() {
    const photos = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
  ];

  return (
    <>
      <section 
      className="
        flex flex-col text-center
        max-w-150 mx-auto px-5 pt-12 pb-38 box-content
        lg:pt-18 lg:pb-30
        lg:flex-row lg:text-left lg:max-w-300 lg:py-26
      ">
        <img
          src={passionCanopees}
          className="
          object-cover
          max-w-88 w-full 
          mx-auto mt-11
          lg:mt-0 lg:mx-0 lg:mr-26 lg:max-w-135 lg:w-135 lg:max-h-130 lg:h-130
        "
          alt="part of the canopees team"
        />
        <div 
          className="
          mb-0
          lg:mt-0 lg:mx-0 lg:mr-26 lg:max-w-135 lg:w-135 lg:max-h-130 lg:h-130
        ">
          <h2 className="mb-5">Canopées, c’est avant tout une équipe de passionnés</h2>
          <p className="whitespace-pre-line">{`Depuis 2020, Canopées entretiennent les jardins.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacus viverra, pretium metus et, condimentum leo. Sed lacus sapien, accumsan ut tellus vel, sollicitudin aliquam ligula. Donec ex metus, vehicula in magna eu, semper pulvinar felis. Curabitur elementum gravida leo, ut fringilla est placerat eu. Suspendisse potenti.
            
            Maecenas sapien justo, semper non finibus sit amet, elementum nec arcu. Phasellus vitae mi mollis, rhoncus ex aliquam, pulvinar sem.`}
          </p>
        </div>
      </section>
      <section 
      className="
        flex flex-col text-center
        max-w-300 mx-auto px-5 pt-12 pb-38 box-content
        sm:pt-18 sm:pb-30
        lg:flex-row lg:text-left lg:max-w-300 lg:py-26
      ">
        <div>
          <h2 className="mb-5">Particuliers, Professionnels, Collectivitées</h2>
          <p className="whitespace-pre-line">
            {`Voici des exemples types de réalisations possibles :
            Créations à la carte
            Valorisation des déchets verts
            Espaces communaux`}
          </p>
        </div>
        <Slider />
      </section>
      <section className="flex-col max-w-300 px-5 mx-auto box-content flex">
        <h2 className="text-center mb-5">Exemples de réalisations</h2>
        <Carousel photos={photos} startIndex={3}/>
      </section>
    </>
  );
}
