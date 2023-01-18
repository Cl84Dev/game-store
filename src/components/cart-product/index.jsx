import { useDispatch } from "react-redux";
import "./styles.css";
import {
  addProduct,
  decreaseProductQuantity,
  removeProduct,
} from "../../redux/cart/slice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: product.id,
        imgUrl: product.imgUrl,
        console: product.console,
        price: product.price,
      })
    );
  };

  const handleDecreaseQuantity = () => {
    dispatch(
      decreaseProductQuantity({
        id: product.id,
        imgUrl: product.imgUrl,
        console: product.console,
        price: product.price,
        quantity: product.quantity,
      })
    );
  };

  const handleRemoveProduct = () => {
    dispatch(
      removeProduct({
        id: product.id,
      })
    );
  };

  return (
    <div className="game-card-cart d-flex flex-column justify-content-between align-items-center shadow-lg border rounded m-3">
      <img className="img-cart mt-1" src={product.imgUrl} />
      <div
        className="btn-remove btn-cart btn btn-danger fw-bold fs-3 m-3 d-flex justify-content-center align-items-center"
        onClick={handleRemoveProduct}
      >
        X
      </div>
      <div className="text-center">
        <div className="my-2 fw-bold">{product.console}</div>
        <div className="my-2">R$ {product.price * product.quantity}</div>
        <div>Quantity:</div>
        <div className="d-flex align-items-center justify-content-around">
          <div
            className="btn-cart btn btn-primary fw-bold fs-3 m-3 d-flex justify-content-center align-items-center"
            onClick={handleAddProduct}
          >
            +
          </div>
          {product.quantity}
          <div
            className="btn-cart btn btn-danger fw-bold fs-3 m-3 d-flex justify-content-center align-items-center"
            onClick={handleDecreaseQuantity}
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
