import GameCard from "../game-card";
import products from "../../data/products";
import "./styles.css";

const ShowProducts = () => {
  return (
    <div className="show-products d-flex flex-wrap justify-content-center mt-5">
      {products.map((product) => (
        <GameCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ShowProducts;
