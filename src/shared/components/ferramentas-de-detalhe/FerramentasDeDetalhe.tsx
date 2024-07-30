import { AddSharp, ArrowBackSharp, DeleteSharp, SaveSharp } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";

export const FerramentasDeDetalhe: React.FC = () => {
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
      <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<SaveSharp />}>
        Salvar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<SaveSharp />}>
        Salvar e voltar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<DeleteSharp />}>
        Apagar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<AddSharp />}>
        Novo
      </Button>
      <Divider variant="middle" orientation="vertical" />
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<ArrowBackSharp />}>
        Voltar
      </Button>
    </Box>
  );
}