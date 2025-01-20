import React, {useState} from 'react';
import PaginaLogin from './paginas/pagina-login';
import HomePage from './paginas/HomePage';

function App() {
  const [token, setToken] = useState(null);
  const handleLoginSuccess = (token) => {
      setToken(token);
      console.log(token)
  }
  return (
    <div>
      {token ? (
        <HomePage />
      ) : (
        <PaginaLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;