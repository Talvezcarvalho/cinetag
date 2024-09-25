import { useParams } from 'react-router-dom';
import Banner from '../../componentes/Banner'
import Titulo from '../../componentes/Titulo'
import styles from './player.module.css'
import NaoEncontrada from '../NaoEncontrada';
import { useContext} from 'react';
import { VideosContext } from '../../contextos/Videos';

const Player = () => {

    const { videos } = useContext(VideosContext);
    console.log(videos);
    const parametros = useParams();

    const video = videos.find((video) => video.id === Number(parametros.id));
   
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