export default function Modal({ open, onClose, photos }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[var(--light-white)] p-6 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-rouge"
        >
          ✕
        </button>
        <div className="grid grid-cols-1 gap-4">
          {photos.map((photo, i) => (
            <img key={i} src={photo} alt="réalisation" className="rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}