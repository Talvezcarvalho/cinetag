import { useParams } from 'react-router-dom';
import Banner from '../../componentes/Banner'
import Titulo from '../../componentes/Titulo'
import styles from './player.module.css'
import NaoEncontrada from '../NaoEncontrada';
import { useEffect, useState } from 'react';

const Player = () => {

    const [video, setVideo] = useState([]);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Talvezcarvalho/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => setVideo(...dados))
    }, []);

   
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