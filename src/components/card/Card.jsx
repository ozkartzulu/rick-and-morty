import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions'
import styles from './Card.module.css'
import imgLikeBlue from '../../assets/like-blue.svg'
import imgLikeWhite from '../../assets/like-white.svg'

export function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [ isFav, setIsFav ] = useState(false)

   useEffect( () => {
      myFavorites.forEach((fav) => {
         if (fav?.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites] )

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image, onClose, addFav, removeFav})
      } 
   }

   return (
      <div className={styles.card}>
         <div className={styles.image}>
            <button onClick={ () => onClose(id) }>X</button>
            {
               isFav ? (
                  <span onClick={handleFavorite}><img src={imgLikeBlue} alt="" /></span>
               ) : (
                  <span onClick={handleFavorite}><img src={imgLikeWhite} alt="" /></span>
               )
            }
            <Link to={`/detail/${id}`} >
               <div className={styles.imageHover}>
                  <img src={image} alt='' />
               </div>
            </Link>
            <Link to={`/detail/${id}`}><p>{name}</p></Link>
         </div>
         <div className={styles.wrap}>
            <p><strong>Specie:</strong> {species}</p>
            <p><strong>Gender:</strong> {gender}</p>
         </div>
         {/* <h2>{status}</h2>
         <h2>{origin}</h2> */}
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect( mapStateToProps, mapDispatchToProps )(Card)
