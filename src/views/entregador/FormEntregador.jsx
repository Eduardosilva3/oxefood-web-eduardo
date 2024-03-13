import React from "react";
import { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

const options = [
    { key: 'AC', text: 'Acre', value: 'AC' },
    { key: 'AL', text: 'Alagoas', value: 'AL' },
    { key: 'AP', text: 'Amapá', value: 'AP' },
    { key: 'AM', text: 'Amazonas', value: 'AM' },
    { key: 'BA', text: 'Bahia', value: 'BA' },
    { key: 'CE', text: 'Ceará', value: 'CE' },
    { key: 'DF', text: 'Distrito Federal', value: 'DF' },
    { key: 'ES', text: 'Espírito Santo', value: 'ES' },
    { key: 'GO', text: 'Goiás', value: 'GO' },
    { key: 'MA', text: 'Maranhão', value: 'MA' },
    { key: 'MT', text: 'Mato Grosso', value: 'MT' },
    { key: 'MS', text: 'Mato Grosso do Sul', value: 'MS' },
    { key: 'MG', text: 'Minas Gerais', value: 'MG' },
    { key: 'PA', text: 'Pará', value: 'PA' },
    { key: 'PB', text: 'Paraíba', value: 'PB' },
    { key: 'PR', text: 'Paraná', value: 'PR' },
    { key: 'PE', text: 'Pernambuco', value: 'PE' },
    { key: 'PI', text: 'Piauí', value: 'PI' },
    { key: 'RJ', text: 'Rio de Janeiro', value: 'RJ' },
    { key: 'RN', text: 'Rio Grande do Norte', value: 'RN' },
    { key: 'RS', text: 'Rio Grande do Sul', value: 'RS' },
    { key: 'RO', text: 'Rondônia', value: 'RO' },
    { key: 'RR', text: 'Roraima', value: 'RR' },
    { key: 'SC', text: 'Santa Catarina', value: 'SC' },
    { key: 'SP', text: 'São Paulo', value: 'SP' },
    { key: 'SE', text: 'Sergipe', value: 'SE' },
    { key: 'TO', text: 'Tocantins', value: 'TO' },
];

export default function FormEntregador() {

    const [ativo, setAtivo] = useState('1');

    const handleRadioChange = (e, { value }) => {
        setAtivo(value);
    };
    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={8}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={4}
                                    label='CPF'>

                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={4}
                                    label='RG'
                                    maxLength="10"
                                />


                            </Form.Group>

                            <Form.Group widths={"equal"}>

                                <Form.Input
                                    required
                                    fluid
                                    label='DT Nascimento'>
                                    <InputMask

                                        placeholder="Ex: 20/03/1985"
                                    />


                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid

                                    label='Fone Celular'>

                                    <InputMask
                                        required

                                    />
                                </Form.Input>

                                <Form.Input

                                    fluid

                                    label='Fone Fixo'

                                />

                                <Form.Input

                                    fluid

                                    label='QTD Entregas Realizadas'

                                />
                                <Form.Input

                                    fluid

                                    label='Valor Por Frete'

                                />






                            </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={16}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4}
                                >

                                </Form.Input>

                            </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={7}>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={7}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={3}
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Select
                                    label='UF'
                                    width={16}
                                    placeholder="Selecione"
                                    options={options}
                                >

                                </Form.Select>

                            </Form.Group>
                            
                                <Form.Group>
                                    <Form.Field>
                                        <label style={{ fontWeight: "bold" }}>Ativo: </label>
                                    </Form.Field>
                                    <Form.Radio
                                        label='Sim'
                                        value='1'
                                        name="ativo"
                                        checked={ativo === '1'}
                                        onChange={handleRadioChange}
                                    />
                                    <Form.Radio
                                        name="ativo"
                                        label='Não'
                                        value='0'
                                        checked={ativo === '0'}
                                        onChange={handleRadioChange}
                                    />
                                </Form.Group>

                           

                        </Form>

                        <div style={{ marginTop: '4%' }}>

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
