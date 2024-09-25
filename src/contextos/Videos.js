import { createContext, useEffect, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export const VideosProvider = ({ children }) => {
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Talvezcarvalho/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => setVideos(dados))
    }, []);

    return (
        <VideosContext.Provider value={{ videos}}>
            {children}
        </VideosContext.Provider>
    )
}

