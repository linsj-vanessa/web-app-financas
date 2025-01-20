import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3000', // Defina a URL da sua API
    headers: {
        'Content-Type': 'application/json',
    },
});

const login = async (email, senha) => {
   try{
      return await api.post('/usuarios/login', { email, senha });
    } catch (err){
       console.log(err)
     throw err
    }
};

const cadastro = async (nome, email, senha) => {
     try{
      return await api.post('/usuarios/cadastro', { nome, email, senha });
    } catch (err){
       console.log(err)
     throw err
    }
}

export const servicoAuth = {
    login,
    cadastro
};