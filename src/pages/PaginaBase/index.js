import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/cabecalho";
import { Favprovider } from "../../contextos/Favoritos";
import Container from "../../componentes/Container";
import Rodape from "../../componentes/rodape";
import { VideosProvider } from "../../contextos/Videos";

const PaginaBase = () => {
    return (
    <main>
        <Cabecalho />
        <VideosProvider>
            <Favprovider>
                <Container>
                    <Outlet/>
                </Container>
            </Favprovider>
        </VideosProvider>
        <Rodape/>
    </main>
    );
}

export default PaginaBase;