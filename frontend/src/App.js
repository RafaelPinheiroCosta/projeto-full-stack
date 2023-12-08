import { deleteObjeto, getObjetos, postObjeto, patchObjeto } from './serviços/objetos';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {
 
  const [dadosDoFormulario, setdadosDoFormulario] = useState({
    id: '',
    nome: '',
    tipo: '',
    tamanho: '',
  });

  const [objetos, setObjetos] = useState([])

  useEffect(() => {
    fetchObjetos()
  }, [])

  async function fetchObjetos() {
    const objetosDaAPI = await getObjetos()
    setObjetos(objetosDaAPI)
  }

  async function deletaObjeto(id) {
    await deleteObjeto(id)

    alert(`Você deletou o livro de id: ${id}`)
    await fetchObjetos()

  }

  async function editaDados(id) {

    await patchObjeto(id, dadosDoFormulario);

    await fetchObjetos();
  }

  async function submeteFormulario(event) {
    event.preventDefault();

    await postObjeto(dadosDoFormulario);

    await fetchObjetos();
  }

  function handleInputChange(event) {
    setdadosDoFormulario({
      ...dadosDoFormulario, [event.target.name]: event.target.value,
    });
  }

  return (
    <Container
      sx={{
        flexDirection: 'column',
        marginTop: '16px',
        backgroundColor: '#f0f0f0',
        padding: '16px',
        borderRadius: '8px',
      }}
    >
      <Box
        component="form"
        onSubmit={submeteFormulario}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          gap: '16px',
          backgroundColor: '#f0f0f0', // Cinza claro
        }}
      >
        <TextField
          label="ID"
          name="id"
          value={dadosDoFormulario.id}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          label="Nome"
          name="nome"
          value={dadosDoFormulario.nome}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          label="Tipo"
          name="tipo"
          value={dadosDoFormulario.tipo}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          label="Tamanho"
          name="tamanho"
          value={dadosDoFormulario.tamanho}
          onChange={handleInputChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>

      </Box>

      {objetos.map(objeto => (
        <Card key={objeto.id} sx={{ marginTop: '16px', backgroundColor: '#c0c0c0' /* Cinza mais escuro */ }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {objeto.nome}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              ID: {objeto.id}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Tipo: {objeto.tipo}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Tamanho: {objeto.tamanho}
            </Typography>
            <Button onClick={() => deletaObjeto(objeto.id)} variant="contained" color="secondary">
              Apagar
            </Button>

            <Button onClick={() => editaDados(objeto.id)} variant="contained" color="primary">
              Editar
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default App;
