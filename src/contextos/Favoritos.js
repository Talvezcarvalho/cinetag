import { createContext, useContext, useState } from "react";


export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export const Favprovider = ({ children }) => {
    const[favorito, setFavoritos] = useState([]);

    return (
        <FavoritosContext.Provider value={{favorito, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export const useFavoritoContext = () => {

    const { favorito, setFavoritos } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.find(item => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }

        novaLista = favorito.filter((item) => item.id !== novoFavorito.id);
        return setFavoritos(novaLista);
    }

    return { favorito, adicionarFavorito };
    
}