
import { connect, useDispatch } from 'react-redux'
import Card from '../card/Card';
import styles from './Favorites.module.css'
import { removeFav, filterCards, orderCards } from '../../redux/actions'

export const Favorites = ({myFavorites, removeFav}) => {

   const dispatch = useDispatch()

   const onClose = (id) => {
      removeFav(id)
   }

   const handleFilter = (e) => {
      dispatch(filterCards(e.target.value))
   }

   const handleOrder = (e) => {
      dispatch(orderCards(e.target.value))
   }

   console.log(myFavorites)
    return (
        <section className={styles.section}>
         <div className='container'>
            <div className={styles.filter}>
               <div className={styles.filterItem}>
                  <label htmlFor="order">Order By</label>
                  <select name="order" id="order" onChange={handleOrder}>
                     <option value="A">Ascendent</option>
                     <option value="D">Descendent</option>
                  </select>
               </div>
               <div className={styles.filterItem}>
                  <label htmlFor="filter">Filter By</label>
                  <select name="filter" id="filter" onChange={handleFilter}>
                     <option value="All">All Genders</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Genderless">Genderless</option>
                     <option value="unknown">unknown</option>
                  </select>
               </div>
            </div>
            <div className={styles.wrapCard}>
               {myFavorites.map( (item, index) => <Card 
                  id={item?.id}
                  name={item?.name}
                  status={item?.status}
                  species={item?.species}
                  gender={item?.gender}
                  origin={item?.origin.name}
                  image={item?.image}
                  onClose={onClose} 
                  key={index}
               /> )}
            </div>
         </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}
 
 export default connect( mapStateToProps, mapDispatchToProps )(Favorites)