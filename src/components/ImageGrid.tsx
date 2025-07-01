import teamA from "../assets/Japan_national_football_team_crest.svg";
// import teamB from "../assets/Manchester_City_2016.svg";

const ImageGrid = () => {
  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: teamA,
    alt: `Imagem ${i + 1}`,
  }));

  return (
    <div className="container mx-auto p-4">
      {/* abaixo: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-100 p-4"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium">{image.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
