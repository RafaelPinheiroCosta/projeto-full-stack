// src/componentes/FirebaseObjetos.js
import React from 'react';
import {
  Button,
  Container,
  Box,
  Grid,
  Card,
  Fade,
  Typography,
  CardContent
} from '@mui/material';

import { useFirebaseObjetosController } from './FirebaseObjetosController';
import FormularioObjetos from '../../componentes/FormularioObjetos';

function FirebaseObjetos() {
  const {
    objetos,
    objetoSelecionado,
    objeto,
    handleSubmit,
    handleInputChange,
    handleDelete,
    handleEdit,
  } = useFirebaseObjetosController();

  return (
    <Container
      sx={{
        flexDirection: 'column',
        margin: 'auto',
        backgroundColor: '#c0c0c0',
        padding: '16px',
        borderRadius: '8px',
        width: '50%',
        minheight: '120vh',
        gap: '16px',
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          gap: '16px',
          backgroundColor: '#c0c0c0',
          margin: 'auto',
        }}
      >
        <FormularioObjetos        
          dadosDoFormulario={objeto}
          handleInputChange={handleInputChange}
          objetoSelecionado={objetoSelecionado}
          handleSubmit={handleSubmit}
        />
      </Box>

      {objetos.length > 0 && (
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: '20px',
          }}
        >
          {objetos.map((objeto) => (
            <Grid item key={objeto.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Fade in={true} timeout={1000}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {objeto.nome}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Tipo: {objeto.tipo}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Tamanho: {objeto.tamanho}
                    </Typography>

                    <Button
                      onClick={() => handleDelete(objeto.id)}
                      variant="contained"
                      color="secondary"
                    >
                      Apagar
                    </Button>

                    <Button
                      onClick={() => handleEdit(objeto)}
                      variant="contained"
                      color="primary"
                    >
                      Editar
                    </Button>

                  </CardContent>
                </Fade>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
export default FirebaseObjetos;
