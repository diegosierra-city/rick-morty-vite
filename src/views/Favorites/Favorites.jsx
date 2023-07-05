import Cards from '../../components/Cards/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { filter, order } from '../../redux/actions'
import styles from './Favorites.module.css'

export default function Favorites(){
const favorites = useSelector(state => state.myFavorites)
const dispatch = useDispatch()

function handleFilter (event){
  event.target.value!=='' && dispatch(filter(event.target.value))
}

function handleOrder (event){
  event.target.value!=='' && dispatch(order(event.target.value))
}
 return(
  <div>
    <div className={styles.filtros}>
    <h3>Mis Favoritos</h3>
  <select onChange={handleOrder}>
    <option value="">Ordenar</option>
    <option value="A">Ascendente</option>
    <option value="D">Descendente</option>
  </select>

  <select onChange={handleFilter}>
    <option value="">Filtrar</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
<option value="Genderless">Genderless</option>
    <option value="unknown">Unknown</option>
    <option value="todos">Ver Todos</option>
    
  </select>
  </div>

    <Cards characters={favorites}/>
  </div>
 )
}