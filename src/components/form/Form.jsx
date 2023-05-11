
import { useState } from 'react'
import { validate } from './validation'
import styles from './Form.module.css'
import image from '../../assets/rickmorty.png'

const Form = ({login}) => {

    const [userData, setUserData] = useState({email: '', password: ''})

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors( validate( {...userData, [e.target.name]: e.target.value} ) )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!login(userData)) setErrors({...errors, submit: 'User and Password is invalid'})
    }

    return (
        <div className={styles.form}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <form onSubmit={handleSubmit} method='post'>
                {errors.submit && <p>{errors.submit}</p>}
                <div className={styles.row}>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="text" name="email" value={userData.email} onChange={handleChange} placeholder='Email'/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                
                <div className={styles.row}>
                    {/* <label htmlFor="password">Password:</label> */}
                    <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder='Password'/> 
                    {errors.password && <span>{errors.password}</span>}
                </div>
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form