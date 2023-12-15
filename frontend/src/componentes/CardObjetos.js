import {
    Typography,
    Card,
    CardContent,
    Button,
    Fade,
} from '@mui/material';

function CardObjetos(objeto, onClickEditar, onClickDeletar) {
    return (
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
                        onClick={onClickDeletar}
                        variant="contained"
                        color="secondary"
                    >
                        Apagar
                    </Button>

                    <Button
                        onClick={onClickEditar}
                        variant="contained"
                        color="primary"
                    >
                        Editar
                    </Button>
                </CardContent>
            </Fade>
        </Card>
    )
} export default CardObjetos;