import { useDispatch } from 'react-redux'
import '../game-card/styles.css'
import { addProduct } from '../../redux/cart/slice'

const GameCard = ({product}) => {
    const dispatch = useDispatch()

    const handleAddProduct = () => {
        dispatch(addProduct({
            id: product.id,
            imgUrl: product.imgUrl,
            console: product.console,
            price: product.price
        }))
    }

    return (
        <div className='game-card d-flex flex-column justify-content-between shadow-lg border rounded m-3'>
            <img src={product.imgUrl} />
            <div className='text-center'>
                <div className='my-2 fw-bold'>{product.console}</div>
                <div className='my-2'>R$ {product.price} <button className='btn btn-primary' onClick={handleAddProduct}>Add to Cart</button> </div>
            </div>
        </div>
    )
}

export default GameCard