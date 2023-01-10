import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/user/slice'
import LoginForm from '../login-form'
import '../nav-bar/styles.css'

const NavBar = () => {
    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

    const dispatch = useDispatch()

    const handleLogoutClick = () => {
        dispatch(logout())
    }

    return (
        <div className="nav-bar bg-dark fixed-top d-flex justify-content-between align-items-center text-white">
            <div className='fs-2 mx-3 d-flex flex-column justify-content-center fw-bold'>Game Store</div>

            <div className='login'>
                {currentUser && `Bem-vindo, ${currentUser.name}!`}
                {!currentUser ? <LoginForm /> : <button className="mx-2 btn btn-secondary" onClick={handleLogoutClick}>Logout</button>}
            </div>
            
        </div>
    )
}

export default NavBar