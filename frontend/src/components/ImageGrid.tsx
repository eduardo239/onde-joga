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
            className="h-24 w-24 flex justify-center items-center relative overflow-hidden rounded-full shadow-sm border-4 border-transparent hover:border-b-green-400 hover:border-t-green-400 transition-shadow duration-100 p-4 hover:cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
