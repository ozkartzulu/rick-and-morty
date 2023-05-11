import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (e) => {
      setId(e.target.value)
   }

   return (
      <div className={styles.search}>
         <input type='text' id="search" onChange={ handleChange } value={id}/>
         <button onClick={ () => {onSearch(id); setId('')} }>Add</button>
      </div>
   );
}
