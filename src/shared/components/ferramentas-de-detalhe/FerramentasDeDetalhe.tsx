import { AddSharp, ArrowBackSharp, DeleteSharp, SaveSharp } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;
  
  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}
export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,
  mostrarBotaoApagar = true,
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<SaveSharp />}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Salvar
          </Typography>
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<SaveSharp />}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Salvar e fechar
          </Typography>
        </Button>
      )}
      {(mostrarBotaoSalvarEFecharCarregando  && !smDown && !mdDown) && (
        <Skeleton width={180} height={60} />
      )}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmApagar}
          startIcon={<DeleteSharp />}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Apagar
          </Typography>
        </Button>
      )}
      {mostrarBotaoApagarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando  && !smDown) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmNovo}
          startIcon={<AddSharp />}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {(mostrarBotaoNovoCarregando && !smDown) && (
        <Skeleton width={110} height={60} />
      )}

      {
        (
          mostrarBotaoVoltar &&
          (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
        ) && (
          <Divider variant='middle' orientation='vertical' />
        )
      }

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmVoltar}
          startIcon={<ArrowBackSharp />}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Voltar
          </Typography>
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && (
        <Skeleton width={110} height={60} />
      )}
    </Box>
  );
}