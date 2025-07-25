import { useState } from "react";
import Modal from "../components/Modal";

const prestations = [
  {
    id: 1,
    titre: "Conception et réalisation d'espaces verts",
    image: "/images/prestations/conception.jpg",
    details: [
      "/images/realisations/conception1.jpg",
      "/images/realisations/conception2.jpg",
    ],
  },
  {
    id: 2,
    titre: "Entretien des espaces verts",
    image: "/images/prestations/entretien.jpg",
    details: [
      "/images/realisations/entretien1.jpg",
      "/images/realisations/entretien2.jpg",
    ],
  },
  {
    id: 3,
    titre: "Taille des haies",
    image: "/images/prestations/haies.jpg",
    details: [
      "/images/realisations/haies1.jpg",
      "/images/realisations/haies2.jpg",
    ],
  },
  {
    id: 4,
    titre: "Élagage et abattage d’arbres",
    image: "/images/prestations/elagueur.jpg",
    details: [
      "/images/realisations/elagueur1.jpg",
      "/images/realisations/elagueur2.jpg",
    ],
  },
  {
    id: 5,
    titre: "Valorisation des déchets verts",
    image: "/images/prestations/compost.jpg",
    details: [
      "/images/realisations/compost1.jpg",
      "/images/realisations/compost2.jpg",
    ],
  },
];

export default function Prestations() {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const openModal = (photos) => {
    setPhotos(photos);
    setOpen(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Nos prestations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prestations.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 text-center shadow hover:shadow-lg cursor-pointer"
            onClick={() => openModal(p.details)}
          >
            <img
              src={p.image}
              alt={p.titre}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">{p.titre}</h3>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} photos={photos} />
    </div>
  );
}