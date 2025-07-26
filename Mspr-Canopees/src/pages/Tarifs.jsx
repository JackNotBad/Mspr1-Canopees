import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import CREV1 from "../assets/conception et réalisation espaces verts/CREV - Visuel 1.png"
import CREV2 from "../assets/conception et réalisation espaces verts/CREV - Visuel 2.png"
import CREV3 from "../assets/conception et réalisation espaces verts/CREV - Visuel 3.png"
import CREV4 from "../assets/conception et réalisation espaces verts/CREV - Visuel 4.png"
import EEV1 from "../assets/Entretien des espaces verts/EEV - Visuel 1.png"
import EEV2 from "../assets/Entretien des espaces verts/EEV - Visuel 2.png"
import EEV3 from "../assets/Entretien des espaces verts/EEV - Visuel 3.png"
import EEV4 from "../assets/Entretien des espaces verts/EEV - Visuel 4.png"
import TH1 from "../assets/Taille des haies/TH - Visuel 1.png"
import TH2 from "../assets/Taille des haies/TH - Visuel 2.png"
import Th2 from "../assets/Taille des haies/TH - Visuel 3.png"
import TH4 from "../assets/Taille des haies/TH - Visuel 4.png"
import EAA1 from "../assets/Élagage et abatage d’arbres/EAA - Visuel 1.png"
import EAA2 from "../assets/Élagage et abatage d’arbres/EAA - Visuel 2.png"
import EAA3 from "../assets/Élagage et abatage d’arbres/EAA - Visuel 3.png"
import EAA4 from "../assets/Élagage et abatage d’arbres/EAA - Visuel 4.png"
import VDV1 from "../assets/Valorisation des déchets verts/VDV - Visuel 1.png"
import VDV2 from "../assets/Valorisation des déchets verts/VDV - Visuel 2.png"
import VDV3 from "../assets/Valorisation des déchets verts/VDV - Visuel 3.png"
import VDV4 from "../assets/Valorisation des déchets verts/VDV - Visuel 4.png"

const tarifs = [
  {
    id: 1,
    icon: "🌿",
    titre: "Conception & Réalisation",
    description:
      "Étude personnalisée, plan, choix végétaux, mise en œuvre complète",
    price: "À partir de 350 € TTC pour un jardin < 50 m² (sur devis)",
    features: [
      "✔️ Plan d’aménagement 2D/3D",
      "✔️ Sélection végétale adaptée",
      "✔️ Travaux de plantation & finitions",
    ],
    details: [CREV1, CREV2, CREV3, CREV4],
  },
  {
    id: 2,
    icon: "🧹",
    titre: "Entretien régulier",
    description:
      "Tonte, désherbage, soins aux plantes… pour un jardin impeccable toute l’année.",
    price: "À partir de 65 € TTC / passage (tarif forfaitaire pour < 100 m²)",
    features: [
      "✔️ Fréquence au choix (mensuelle, saisonnière)",
      "✔️ Intervention rapide et propre",
      "✔️ Contrat annuel possible",
    ],
    details: [EEV1, EEV2, EEV3, EEV4],
  },
  {
    id: 3,
    icon: "✂️",
    titre: "Taille de haies",
    description:
      "Taille esthétique ou d’entretien, adaptée aux saisons et aux espèces.",
    price: "À partir de 60 € TTC / intervention (tarif variable selon longueur & accessibilité)",
    features: [
      "✔️ Taille manuelle ou mécanique",
      "✔️ Ramassage & évacuation inclus",
      "✔️ Respect du cycle végétatif",
    ],
    details: [TH1, TH2, Th2, TH4],
  },
  {
    id: 4,
    icon: "🌲",
    titre: "Élagage & Abattage",
    description:
      "Interventions techniques sécurisées par cordistes diplômés.",
    price: "À partir de 180 € TTC / arbre (élagage léger hors nacelle)",
    features: [
      "✔️ Taille douce ou de réduction",
      "✔️ Intervention par cordiste",
      "✔️ Respect des normes de sécurité",
    ],
    details: [EAA1, EAA2, EAA3, EAA4],
  },
  {
    id: 5,
    icon: "♻️",
    titre: "Valorisation des déchets",
    description:
      "Tri, broyage, compostage ou évacuation dans une démarche écoresponsable.",
    price: "À partir de 35 € TTC / m³ (en complément d’une prestation)",
    features: [
      "✔️ Revalorisation sur place si possible",
      "✔️ Transport vers filière agréée",
      "✔️ Zéro brûlage, zéro gaspillage",
    ],
    details: [VDV1, VDV2, VDV3, VDV4],
  },
];

export default function Tarifs() {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const openModal = (images) => {
    setPhotos(images);
    setOpen(true);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Chaque projet est unique, mais voici une estimation pour vous guider</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  w-fit mx-auto">
        {tarifs.map((t) => (
          <div
            key={t.id}
            className="flex max-w-180 flex-col border items-center text-center rounded-xl p-6 shadow hover:shadow-lg bg-[#E1F0E5]"
          >
            <div className="flex justify-center mb-4">
              <span className="text-4xl mr-3">{t.icon}</span>
              <h2 className="text-xl font-semibold">{t.titre}</h2>
            </div>
            <p className="italic mb-2 text-gray-700">{t.description}</p>
            <p className="font-semibold text-[var(--green)] mb-4">{t.price}</p>


            <ul className="space-y-1 mb-6">
              {t.features.map((feat, idx) => (
                <li key={idx} className="flex items-center justify-center">
                  {feat}
                </li>
              ))}
            </ul>
              <button
                onClick={() => openModal(t.details)}
                className="bg-none text-[var(--mauve)] border-1 border-[var(--orange)] py-2 w-28 mb-5 rounded hover:bg-[var(--pink)] hover:border-[var(--pink)] transition"
              >
                Exemples
              </button>
              <Link
                to="/contact"
                className="text-center bg-[var(--orange)] text-[var(--mauve)] py-2 w-28 rounded hover:bg-[var(--pink)] transition"
              >
                Devis
              </Link>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} photos={photos} />
    </div>
  );
}