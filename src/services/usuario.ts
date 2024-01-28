'use client'
import { useState } from "react";
const axios = require('axios').default;
import { useRouter } from 'next/navigation'

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);  
  const [idUsuario, setIdUsuario] = useState();  
  const router = useRouter();

  const url = `http://localhost:8080/api/users`;

  const listar = async () => {
    try {
      const response = await axios.get(url);
      setUsuarios(response.data);
    } catch (err) {
      console.error("Erro ao buscar a lista de usuários:", err);
    }
  };

  
  const criar = async (userData:any) => {
    try {
      await axios.post(url, userData);
      console.log("Cadastro realizado!!!");
      listar(); // Refresh the user list after creating
    } catch (err) {
      console.error("Erro ao criar usuário:", err);
    }
  };

  const atualizar = async (id:any, userData:any) => {
    try {
      await axios.put(`${url}?id=${id}`, userData);
      console.log("Cadastro atualizado!!!");
      listar(); // Refresh the user list after updating
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
    }
  };

  const deletar = async (id:any) => {
    try {
      await axios.delete(`${url}/?id=${id}`);
      console.log("Exclusão feita com sucesso!!!");
      listar(); // Refresh the user list after deleting
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
    }
  };


  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    dataNascimento:"",
    telefone:"",
    cpf: "",
    logradouro: "",
    numero:"",
    bairro:"",
    cep:"",
    complemento:"",
    estado: "",
    cidade: "",
  });
  const resetFormValues = () => {
    setFormValues({
      nome: "",
      email: "",
      dataNascimento:"",
      telefone:"",
      cpf: "",
      logradouro: "",
      numero:"",
      bairro:"",
      cep:"",
      complemento:"",
      estado: "",
      cidade: "",
    });
  };

  const handleInputChange = (event:any) => {
    const { id, value } = event.target;
    if (id === "id"){
      setIdUsuarios(value)
    }
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    criar(formValues);
    resetFormValues();
    router.push('/user'); 
  };

  const handleSubmitAtualizar = (event:any) => {
    event.preventDefault();
    const id = idUsuario;
    atualizar(id, formValues);
    router.push('/user'); 
  };

  const handleDelete = (id:any) => {
    deletar(id);
  };

  return { usuarios, listar, criar, atualizar, deletar, handleInputChange,  formValues, setFormValues, handleSubmit,handleSubmitAtualizar, setIdUsuario, handleDelete};
};

export default useUsuarios;