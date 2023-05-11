import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import styles from './Detail.module.css'

const Detail = () => {

    const [character, setCharacter] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h1>{character?.name}</h1>
                        <p><strong>STATUS :</strong><span>{character?.status}</span></p>
                        <p><strong>GENDER :</strong><span>{character?.gender}</span></p>
                        <p><strong>SPECIE :</strong><span>{character?.species}</span></p>
                        <p><strong>ORIGIN :</strong><span>{character?.origin?.name}</span></p>
                    </div>
                    <div className={styles.cardImage}>
                        <img src={character.image} alt={character.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail