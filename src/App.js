import { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css';
import Nav from './components/nav/Nav';

import Home from './views/Home'
import About from './views/ViewAbout'
import ViewFavorites from './views/ViewFavorites'
import Detail from './views/DetailView'
import View404 from './views/View404'
import ViewLogin from './views/ViewLogin'
import ViewLogout from './views/ViewLogout'

function App() {

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const location = useLocation()
   const navigate = useNavigate()

   const EMAIL = 'oscar@gmail.com'
   const PASSWORD = 'oscar1'

   const login = (userData) => {
      let res = false
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true)
         res = true
         navigate('/home')
      }
      return res
   }

   const logout = () => {
      setAccess(false)
   }

   const onSearch = (id) => {
      if (characters.some((item) => item.id === +id)) {
         console.log('This character is already exists')
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }

   return (
      <div className='App'>
         {location.pathname !== '/' && <div className='top-nav'>Top nav Rick and Morty</div>}
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/home' element={<Home characters={characters} setCharacters={setCharacters} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<ViewFavorites />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/' element={<ViewLogin login={login} />} />
            <Route path='/logout' element={<ViewLogout logout={logout} />} />
            <Route path='*' element={<View404 />} />
         </Routes>

      </div>
   );
}

export default App;
