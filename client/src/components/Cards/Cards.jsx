import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   console.log('Cards',characters)
   return <div className={styles.cards}>
{characters?.map((character,i) => {
  return <Card key={i} character={character} onClose={onClose} />
})}

   </div>;
}
