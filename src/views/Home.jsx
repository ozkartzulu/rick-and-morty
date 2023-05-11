
import Cards from '../components/cards/Cards'

const Home = ({characters, setCharacters}) => {

    const onClose = (id) => {
        setCharacters( characters.filter( (item) => item.id !== id ) )
    }

    return (
        <main className='bg-full-grad'>
            <Cards characters={characters} onClose={onClose}/>
         </main>
    )
}

export default Home