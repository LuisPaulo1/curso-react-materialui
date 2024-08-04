import { useSearchParams } from "react-router-dom";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { useEffect, useMemo } from "react";

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    PessoaService.getAll(1, busca).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
        return;
      }
      console.log(result);
    });
  }, [busca]);

  return (
    <LayoutBaseDePagina 
        titulo="Listagem de pessoas" 
        barraDeFerramentas = {
          <FerramentasDaListagem
            mostrarInputBusca
            textoBotaoNovo="Nova"
            textoDaBusca={busca}
            aoMudarTextoDeBusca={(texto) => setSearchParams({ busca: texto }, { replace: true })}
            />
        }
    >
    <div></div>
    </LayoutBaseDePagina>
  );
};