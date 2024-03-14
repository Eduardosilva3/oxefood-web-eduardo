
import './App.css';
import Home from './views/home/home';
import FormCliente from './views/cliente/FormCliente';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';
import { Segment } from 'semantic-ui-react';

function App() {

  //teste
  return (
    <div className="App">
      
      <FormCliente /> 
      <FormProduto/>

     <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2024 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
