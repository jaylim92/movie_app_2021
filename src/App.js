import React from "react";
import propTypes from "prop-types";

const shoesILike = [
  {
    id: 1,
    name: "jordan",
    image:
      "https://images.stockx.com/images/Air-Jordan-1-Retro-Chicago-2015-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607656901",
    rating: 5,
  },
  {
    id: 2,
    name: "vapor",
    image:
      "https://images.stockx.com/images/Nike-Air-VaporMax-Flyknit-3-White-Pure-Platinum-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607005340",
    rating: 4.5,
  },
  {
    id: 3,
    name: "sacai",
    image:
      "https://images.stockx.com/images/Nike-Vaporwaffle-sacai-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1624990785",
    rating: 3.5,
  },
  {
    id: 4,
    name: "supreme",
    image:
      "https://images.stockx.com/360/Nike-Air-Force-1-Low-Supreme-Box-Logo-White/Images/Nike-Air-Force-1-Low-Supreme-Box-Logo-White/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606164536",
    rating: 3.7,
  },
];

function Shoes({ name, pic, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={pic} alt={name} />
      <h4>{rating}</h4>
    </div>
  );
}

Shoes.propTypes = {
  name: propTypes.string.isRequired,
  pic: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {shoesILike.map((brand) => (
        <Shoes
          key={brand.id}
          name={brand.name}
          pic={brand.image}
          rating={brand.rating}
        />
      ))}
    </div>
  );
}

export default App;
