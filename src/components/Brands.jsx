import prime from "../assets/Brands/prime.png";
import bein from "../assets/Brands/bein.png";
import natGeo from "../assets/Brands/natGeo.png";
import netflix from "../assets/Brands/netflix.png";
import sky from "../assets/Brands/sky.png";
import hbo from "../assets/Brands/hbo.png";
import f1 from "../assets/Brands/f1.png";
import epl from "../assets/Brands/epl.png";
import uefa from "../assets/Brands/uefa.png";

const Brands = () => {
  const brandsArray = [
    { link: "#", name: "Prime", src: prime, id: 1 },
    { link: "#", name: "Bein", src: bein, id: 2 },
    { link: "#", name: "Nat Geo", src: natGeo, id: 3 },
    { link: "#", name: "UEFA", src: uefa, id: 9 },
    { link: "#", name: "Sky", src: sky, id: 5 },
    { link: "#", name: "HBO", src: hbo, id: 6 },
    { link: "#", name: "F1", src: f1, id: 7 },
    { link: "#", name: "EPL", src: epl, id: 8 },
    { link: "#", name: "Netflix", src: netflix, id: 4 },
  ];

  return (
    <div className="brands">
      {brandsArray.map((brand) => (
        <div key={brand.id} className="icon">
          <a href={brand.link}>
            <img src={brand.src} alt={`${brand.name} image `} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Brands;
