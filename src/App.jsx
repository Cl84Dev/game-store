import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GameCard from './components/game-card';

import products from './data/products';
import NavBar from './components/nav-bar';
import Cart from './components/cart';

function App() {
  return (
    <div>
      <NavBar/>
      <Cart/>
      <div className='show-products d-flex flex-wrap justify-content-center mt-5'>
       {products.map((product) => <GameCard product={product} key={product.id}/>)}
      </div>
    </div>
  )
}

export default App
