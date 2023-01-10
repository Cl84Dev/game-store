import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { selectProductsCount, selectProductsTotalPrice } from '../../redux/cart/cart.selectors';
import CartProduct from '../cart-product';
import '../cart/styles.css'

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

  const { product } = useSelector(rootReducer => rootReducer.cartReducer)

  const totalPrice = useSelector(selectProductsTotalPrice)
  const totalQuantity = useSelector(selectProductsCount)

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='button'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> ({totalQuantity})
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {currentUser ? `${currentUser.name}, this is your cart:` : `Your cart:`}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column align-items-center'>
          {product.map((product) => <CartProduct product={product} key={product.id}/>)}
          Total: R$ {totalPrice}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart