import prime from "../assets/Brands/prime.png";
import bein from "../assets/Brands/bein.png";
import natGeo from "../assets/Brands/natGeo.png";
import netflix from "../assets/Brands/netflix.png";
import sky from "../assets/Brands/sky.png";
import hbo from "../assets/Brands/hbo.png";

const Brands = () => {
  const brandsArray = [
    { name: "Prime", src: prime, id: 1 },
    { name: "Bein", src: bein, id: 2 },
    { name: "Nat Geo", src: natGeo, id: 3 },
    { name: "Netflix", src: netflix, id: 4 },
    { name: "Sky", src: sky, id: 5 },
    { name: "HBO", src: hbo, id: 6 },
  ];

  return (
    <div className="brands">
      {brandsArray.map((brand) => (
        <div key={brand.id} className="icon">
          <img src={brand.src} alt={`${brand.name} image `} />
        </div>
      ))}
    </div>
  );
};

export default Brands;
