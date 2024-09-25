import { useContext, useEffect, useState } from "react";
import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
import Titulo from "../../componentes/Titulo";
import styles from './inicio.module.css';
import { VideosContext } from "../../contextos/Videos";

const Inicio = () => {

    const {videos} = useContext(VideosContext);


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