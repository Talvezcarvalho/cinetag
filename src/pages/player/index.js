import { useParams } from 'react-router-dom';
import Banner from '../../componentes/Banner'
import Titulo from '../../componentes/Titulo'
import videos from '../../json/db.json';

import styles from './player.module.css'
import NaoEncontrada from '../NaoEncontrada';

const Player = () => {

    const parametros = useParams();

    const video = videos.find((item) => {
        return item.id ===Number(parametros.id)});

        if(!video) {
            return <NaoEncontrada/>
        }

    return (
        <>
        <Banner imagem="player"/>
        <Titulo>
        <h2>Player</h2>
        </Titulo> 
        <section className={styles.container}>
            <iframe width="560"
             height="315"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullScreen></iframe>
        </section>
        </>
    )
}

export default Player;