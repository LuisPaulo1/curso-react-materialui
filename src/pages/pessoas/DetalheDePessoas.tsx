import { useNavigate, useParams } from "react-router-dom";

import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    alert('Salvar');
  }

  const handleDelete = () => {
    alert('Apagar');
  }

  return (
    <LayoutBaseDePagina
      titulo="Detalhe de Pessoas"
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}

          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={handleDelete}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    >
      <p>Detalhe de Pessoas {id}</p>
    </LayoutBaseDePagina>
  )
}