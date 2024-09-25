import { useFavoritoContext } from "../../contextos/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favorite.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

const Card = ({id, titulo, capa}) =>{
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((item) => item.id === id); 
    const icone = !ehFavorito? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container} key={id}>
        <Link className={styles.link} to={`/${id}`}>
            <img src={capa} alt={`Capa do filme${titulo}`}className={styles.capa} />
            <h2>{titulo}</h2>
        </Link>
        <img src={icone}
        alt="Favoritar" className={styles.favoritar}
        onClick={() => {
            adicionarFavorito({id, titulo, capa})
        }} />
        </div>
    );
}

export default Card;