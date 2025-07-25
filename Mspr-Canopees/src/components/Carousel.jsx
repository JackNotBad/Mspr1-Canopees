const photos = [
  "/images/real1.jpg",
  "/images/real2.jpg",
  "/images/real3.jpg",
  "/images/real4.jpg",
  "/images/real5.jpg",
];

export default function Carousel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
      {photos.map((photo, i) => (
        <img key={i} src={photo} alt="réalisation" className="rounded-lg" />
      ))}
    </div>
  );
}