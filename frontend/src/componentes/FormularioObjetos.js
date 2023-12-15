import {
    Typography,
    TextField,
    Box,
    Button
} from '@mui/material';

function FormularioObjetos({ dadosDoFormulario, handleInputChange, objetoSelecionado, handleSubmit }) {
    return (
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          margin: 'auto',
          backgroundColor: '#f0f0f0',
          padding: '30px',
          borderRadius: '10px'
        }}
      >
        <Typography variant="h3" component="div" align="center">
          Cadastrar Objeto
        </Typography>
  
        <TextField
          label="Nome"
          name="nome"
          value={dadosDoFormulario.nome || ''}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          label="Tipo"
          name="tipo"
          value={dadosDoFormulario.tipo || ''}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          label="Tamanho"
          name="tamanho"
          value={dadosDoFormulario.tamanho || ''}
          onChange={handleInputChange}
          variant="outlined"
        />
  
        <Button type="submit" variant="contained" color="primary">
          {objetoSelecionado ? 'Atualizar' : 'Adicionar'}
        </Button>
      </Box>
    );
  }
  
  export default FormularioObjetos;