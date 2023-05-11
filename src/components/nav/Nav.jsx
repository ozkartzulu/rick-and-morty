
import { Link, NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import styles from './Nav.module.css'

const Nav = ({onSearch}) => {

    const addRandom = () => {
        const rand = Math.floor(1 + Math.random() * (826 - 1))
        onSearch(rand)
    }

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navContent}>
                    <ul>
                        <NavLink to='/home' className={ ({isActive}) => isActive ? 'active' : '' }>Home</NavLink>
                        <NavLink to='/about' className={ ({isActive}) => isActive ? 'active' : '' }>About</NavLink>
                        <NavLink to='/favorites' className={ ({isActive}) => isActive ? 'active' : '' }>Favorites</NavLink>
                        <NavLink to='/logout' >Logout</NavLink>
                    </ul>
                    <button onClick={addRandom} className={styles.leftButton}>Add Random</button>
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
            
        </nav>
    )
}

export default Nav