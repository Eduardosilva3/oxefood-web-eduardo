import React, {useState} from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from "../../MenuSistema";
import { Link } from "react-router-dom";

export default function FormProduto () {

  const [codigo, setCodigo] = useState();
  const [titulo, setTitulo] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();


  function salvar() {

    console.log("SAlvando")
    let produtoRequest = {
         codigo: codigo,
         titulo: titulo,
         descricao: descricao,
         valorUnitario: valorUnitario,
         tempoEntregaMinimo: tempoEntregaMinimo,
         tempoEntregaMaximo: tempoEntregaMaximo
    }

    axios.post("http://localhost:8080/api/produto", produtoRequest)
    .then((response) => {
         console.log('Produto cadastrado com sucesso.' + response.data.id)
    })
    .catch((error) => {
         console.log('Erro ao incluir o um Produto.')
    })
}

    return (

        <div>
            <MenuSistema tela={'produto'} />
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    width={12}
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                width={6}
                                    required
                                    fluid
                                    label='Codigo Produto'>
                                        
                                    <InputMask
                                        required
                                        mask="999.999.999.999.999"
                                        value={codigo}
                                        onChange={e => setCodigo(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            <Form.Group>

                                <Form.TextArea
                                    required
                                    fluid
                                    label='Descrição'
                                    maxLength="100"
                                    width={16}
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />


                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                    >
                                        
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minimo em minutos'
                                    width={6}>
                                    <InputMask 
                                        placeholder="30"
                                        value={tempoEntregaMinimo}
                                        onChange={e => setTempoEntregaMinimo(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maximo em minutos'
                                    width={6}
                                    value={tempoEntregaMaximo}
                                    onChange={e => setTempoEntregaMaximo(e.target.value)}
                                >
                                    <InputMask 
                                      
                                        placeholder="40"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                as={Link}
                                to='/list-produto'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={()=>salvar()}
                                >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
