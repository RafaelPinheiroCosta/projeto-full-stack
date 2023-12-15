// src/componentes/FirebaseObjetosController.js
import { useState, useEffect } from 'react';
import {
  addFirebaseItem,
  updateFirebaseItem,
  deleteFirebaseItem,
  getFirebaseItems,
} from '../../serviços/firebase/CRUDFirebase'

export function useFirebaseObjetosController() {
  const [objetos, setObjetos] = useState([]);
  const [objetoSelecionado, setObjetoSelecionado] = useState(null);
  const [objeto, setObjeto] = useState({
    id: '',
    nome: '',
    tipo: '',
    tamanho: '',
  });

  const fetchData = async () => {
    try {
      const data = await getFirebaseItems('objetos');
      setObjetos(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (objetoSelecionado) {
        await updateFirebaseItem('objetos', objetoSelecionado.id, objeto);
      } else {
        await addFirebaseItem('objetos', objeto);
      }

      setObjeto({ id: '', nome: '', tipo: '', tamanho: '' });
      setObjetoSelecionado(null);
      fetchData();
    } catch (error) {
      console.error('Error handling submit: ', error);
    }
  };

  const handleInputChange = (event) => {
    setObjeto({
      ...objeto,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteFirebaseItem('objetos', id);
      fetchData();
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

  useEffect(() => {
    fetchData();
  }, []);

  return {
    objetos,
    objetoSelecionado,
    objeto,
    handleSubmit,
    handleInputChange,
    handleDelete,
    handleEdit,
  };
}
