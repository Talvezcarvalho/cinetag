import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/cabecalho";
import { Favprovider } from "../../contextos/Favoritos";
import Container from "../../componentes/Container";
import Rodape from "../../componentes/rodape";

const PaginaBase = () => {
    return (
    <main>
        <Cabecalho />
        <Favprovider>
            <Container>
                <Outlet/>
            </Container>
        </Favprovider>
        <Rodape/>
    </main>
    );
}

export default PaginaBase;