import React, { useState } from 'react';
import styles from './formulario-login.module.css';

const FormularioLogin = ({ onLogin, onCadastro }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
     const [isLogin, setIsLogin] = useState(true);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isLogin){
             onLogin({ email, senha });
        } else {
            onCadastro({ nome, email, senha });
        }
    };

    const handleToggleForm = () => {
      setIsLogin(!isLogin)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
           {!isLogin && (
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
            )}
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Cadastrar'}</button>
            <button type='button' onClick={handleToggleForm}>
                {isLogin ? 'Cadastrar' : 'Login'}
            </button>
        </form>
    );
};

export default FormularioLogin;