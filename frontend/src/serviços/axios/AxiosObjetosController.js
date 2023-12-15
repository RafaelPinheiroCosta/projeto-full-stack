import { useState, useEffect } from 'react';
import { deleteObjeto, getObjetos, postObjeto, patchObjeto } from './CRUDAxios';

const useAxiosObjetosController = () => {
  const [objetos, setObjetos] = useState([]);
  const [objetosEncontrados, setObjetosEncontrados] = useState([]);
  const [objetoSelecionado, setObjetoSelecionado] = useState(null);
  const [objeto, setObjeto] = useState({
    id: '',
    nome: '',
    tipo: '',
    tamanho: '',
  });

  useEffect(() => {
    fetchObjetos();
  }, []);

  const fetchObjetos = async () => {
    const objetosDaAPI = await getObjetos();
    setObjetos(objetosDaAPI);
  };

  const handleDelete = async (id) => {
    try {
      await deleteObjeto(id);
      await fetchObjetos();
    } catch (error) {
      console.error('Error handling delete: ', error);
    }
  };

  const handleEdit = (objeto) => {
    setObjetoSelecionado(objeto);
    setObjeto({
      id: objeto.id,
      nome: objeto.nome,
      tipo: objeto.tipo,
      tamanho: objeto.tamanho,
    });
  };

  const handleInputChange = (event) => {
    setObjeto({
      ...objeto,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (objetoSelecionado) {
        await patchObjeto(objetoSelecionado.id, objeto);
      } else {
        await postObjeto(objeto);
      }

      setObjeto({ id: '', nome: '', tipo: '', tamanho: '' });
      setObjetoSelecionado(null);
      await fetchObjetos();
    } catch (error) {
      console.error('Error handling submit: ', error);
    }
  };

  return {
    objetos,
    setObjetos,
    fetchObjetos,
    setObjetosEncontrados,
    objetosEncontrados,
    objetoSelecionado,
    objeto,
    handleDelete,
    handleEdit,
    handleInputChange,
    handleSubmit,
  };
};

export default useAxiosObjetosController;
