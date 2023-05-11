import Card from '../card/Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {

   return (
      <section className={styles.section}>
         <div className='container'>
            <div className={styles.wrapCard}>
               {characters.map( (item) => <Card 
                  id={item.id}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  gender={item.gender}
                  origin={item.origin.name}
                  image={item.image}
                  onClose={onClose} 
                  key={item.id}
               /> )}
            </div>
         </div>
      </section>
      
   )
}
