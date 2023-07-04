import Cards from '../../components/Cards/Cards'
import { useSelector } from 'react-redux'

export default function Favorites(){
const favorites = useSelector(state => state.myFavorites)
 return(
  <div>
    <h1>Favorites</h1>
    <Cards characters={favorites}/>
  </div>
 )
}