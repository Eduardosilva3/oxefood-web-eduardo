import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

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
                                />

                                <Form.Input
                                width={6}
                                    required
                                    fluid
                                    label='Codigo Produto'>
                                        
                                    <InputMask
                                        required
                                        mask="999.999.999.999.999"
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
                                />


                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={6}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minimo em minutos'
                                    width={6}>
                                    <InputMask 
                                        placeholder="30"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maximo em minutos'
                                    width={6}
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
