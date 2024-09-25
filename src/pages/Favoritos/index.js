import Banner from '../../componentes/Banner';
import Card from '../../componentes/Card';
import { useFavoritoContext } from '../../contextos/Favoritos';
import styles from './Favoritos.module.css';

const Favoritos = () => {
    const { favorito } = useFavoritoContext();
    return (
       <>
        <Banner imagem="favoritos"/>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
            })}
            </section>
            
\       </>
    );
}

export default Favoritos;