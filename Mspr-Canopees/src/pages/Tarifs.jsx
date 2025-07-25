export default function Tarifs() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Nos tarifs</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[var(--green)] text-white">
            <th className="p-3 border">Prestation</th>
            <th className="p-3 border">Tarif indicatif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Conception et réalisation d'espaces verts</td>
            <td className="p-3 border">Sur devis</td>
          </tr>
          <tr>
            <td className="p-3 border">Entretien des espaces verts</td>
            <td className="p-3 border">30€ / heure</td>
          </tr>
          <tr>
            <td className="p-3 border">Taille des haies</td>
            <td className="p-3 border">4€ / mètre linéaire</td>
          </tr>
          <tr>
            <td className="p-3 border">Élagage / abattage</td>
            <td className="p-3 border">100€ / arbre (selon taille)</td>
          </tr>
          <tr>
            <td className="p-3 border">Valorisation des déchets verts</td>
            <td className="p-3 border">Sur devis</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}