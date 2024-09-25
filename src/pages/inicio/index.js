import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/cabecalho";
import Card from "../../componentes/Card";
import Rodape from "../../componentes/rodape";
import Titulo from "../../componentes/Titulo";
import videos from '../../json/db.json';
import styles from './inicio.module.css';

const Inicio = () => {
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>
                Um lugar para guardar seus vídeos e filmes!
            </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                     return <Card {...video} key={video.id} />
                })}
            </section>
        </>
        
    );
    }


export default Inicio;