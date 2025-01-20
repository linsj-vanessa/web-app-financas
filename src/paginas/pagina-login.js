import React, { useState } from 'react';
import FormularioLogin from '../componentes/formulario-login';
import { servicoAuth } from '../servicos/servico-auth';
import styles from './pagina-login.module.css'

const PaginaLogin = ({ onLoginSuccess }) => {
   const [loginError, setLoginError] = useState('');
   const [cadastroError, setCadastroError] = useState('');

   const handleCadastro = async ({ nome, email, senha }) => {
         try {
        const response = await servicoAuth.cadastro(nome, email, senha);
        onLoginSuccess(response.data.token);
    } catch (err) {
        setCadastroError("Erro ao fazer cadastro");
        console.error('Erro ao fazer cadastro', err);
    }
};


    const handleLogin = async ({ email, senha }) => {
        try {
            const response = await servicoAuth.login(email, senha);
             onLoginSuccess(response.data.token);

        } catch (err) {
          setLoginError("Credenciais inválidas");
            console.error('Erro ao fazer login', err);
        }
    };

    return (
      <div className={styles.container}>
            <h2>Login</h2>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
           {cadastroError && <p style={{ color: 'red' }}>{cadastroError}</p>}
            <FormularioLogin onLogin={handleLogin} onCadastro={handleCadastro}/>
       </div>
    );
};

export default PaginaLogin;