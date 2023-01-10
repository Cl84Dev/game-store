import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user/slice'
import '../login-form/styles.css'

const LoginForm = () => {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(prev => prev = e.target.value)
    }

    const dispatch = useDispatch()

    const handleLoginClick = () => {
        dispatch(login({
            name: name
        }))
    }

    return (
        <div>
            <input className="rounded mx-1 fs-6 px-2" type="text" placeholder='Your Name' onChange={e => handleChange(e)}/>
            <button onClick={handleLoginClick} className="mx-2 btn btn-secondary">Login</button>
        </div>
    )
}

export default LoginForm