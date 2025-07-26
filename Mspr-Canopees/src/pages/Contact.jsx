import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre demande a été envoyée !");
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={form.nom}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue text-white px-6 py-3 rounded hover:bg-[var(--mauve)]"
          >
            Envoyer
          </button>
        </form>

        <iframe
          title="Plan d'accès"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999802217947!2d2.292292615674644!3d48.85837307928753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdfbaae9f9b%3A0x6bb1e5e4f4b7e95!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1676464169196"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}