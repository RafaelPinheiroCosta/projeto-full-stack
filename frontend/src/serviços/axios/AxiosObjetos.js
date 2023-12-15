import {
    Typography,
    Container,
    Box,
    Card,
    CardContent,
    Button,
    Grid,
    Fade,
    Grow,
} from '@mui/material';
import TextFieldPesquisa from '../../componentes/TextFieldPesquisa';
import FormularioObjetos from '../../componentes/FormularioObjetos';
import useAxiosObjetosController from '../axios/AxiosObjetosController';
//import CardObjetos from '../../componentes/CardObjetos';

function AxiosObjetos() {
    const {
        objetos,
        setObjetosEncontrados,
        objetosEncontrados,
        objetoSelecionado,
        objeto,
        handleDelete,
        handleEdit,
        handleInputChange,
        handleSubmit,
    } = useAxiosObjetosController();

    return (
        <Container
            id="secao1"
            key="secao1"
            sx={{
                flexDirection: 'column',
                margin: 'auto',
                backgroundColor: '#f0f0f0',
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
                    backgroundColor: '#f0f0f0',
                    margin: 'auto',
                }}
            >
                <FormularioObjetos
                    dadosDoFormulario={objeto}
                    handleInputChange={handleInputChange}
                    objetoSelecionado={objetoSelecionado}
                    handleSubmit={handleSubmit}
                />

                <TextFieldPesquisa
                    label={"Pesquise seu objeto Aqui"}
                    onChange={evento => {
                        const textoDigitado = evento.target.value;
                        const resultadoBusca = objetos.filter(objeto => objeto.nome.includes(textoDigitado))
                        setObjetosEncontrados(resultadoBusca)
                    }}
                />

            </Box>

            {objetosEncontrados.length > 0 && (
                <Grid
                    container
                    spacing={2}
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    {objetosEncontrados.map((objeto) => (
                        <Grid item key={objeto.id} xs={12} sm={6} md={4} lg={3}>
                            <Grow
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                timeout={1000}
                            >
                                {/* <CardObjetos
                                    objeto={objeto}
                                    onClickEditar={() => handleEdit(objeto)}
                                    onClickDeletar={() => handleDelete(objeto.id)}
                                /> */}

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

                            </Grow>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}
export default AxiosObjetos;
