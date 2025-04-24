import "./Lista.css";

//importacao de imagens
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"


const Lista = () => {
    return(
        <section className="layout_grid listagem">
            <h1>Lista Dos Filmes</h1>
            <hr/>
            <div className="tabela">
                <table>
                    {/* cabecalho da tabela: */}
                    <thead>
                        {/* tr => tabela row */}
                        <tr className="cabecalho">
                            {/* th => tabela head */}
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>
                        <tr className="item_lista">
                            <td>Madagasgar</td>
                            <td>Ação</td>
                            <td><img src={Editar} alt="caneta" /></td>
                            <td><img src={Excluir} alt="lixeira" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Lista;