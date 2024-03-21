import React from "react";
import { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import { Link } from "react-router-dom";
import axios from "axios";
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

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [ativo, setAtivo] = useState();



    function salvar() {

        console.log(ativo)
        let entregadorRequest = {
             nome: nome,
             cpf: cpf,
             rg: rg,
             dataNascimento: dataNascimento,
             foneCelular: foneCelular,
             foneFixo: foneFixo,
             qtdEntregasRealizadas: qtdEntregasRealizadas,
             valorFrete: valorFrete,
             enderecoRua: enderecoRua,
             enderecoNumero: enderecoNumero, 
             enderecoBairro: enderecoBairro,
             enderecoCidade: enderecoCidade,
             enderecoUf: enderecoUf, 
             ativo: ativo == 1 ? true : false
        }
    
        axios.post("http://localhost:8080/api/entregador", entregadorRequest)
        .then((response) => {
             console.log('Entregador cadastrado com sucesso.' + response.data.id)
        })
        .catch((error) => {
             console.log(error)
        })
    }




    const handleRadioChange = (e, { value }) => {
        setAtivo(value);
    };
    return (

        <div>
            <MenuSistema tela={'entregador'} />
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
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={4}
                                    label='CPF'>

                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={4}
                                    label='RG'
                                    maxLength="10"
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                />


                            </Form.Group>

                            <Form.Group widths={"equal"}>

                                <Form.Input
                                    required
                                    fluid
                                    label='DT Nascimento'>
                                    <InputMask

                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />


                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid

                                    label='Fone Celular'>

                                    <InputMask
                                        required
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}

                                    />
                                </Form.Input>

                                <Form.Input

                                    fluid

                                    label='Fone Fixo'
                                    value={foneFixo}
                                    onChange={e => setFoneFixo(e.target.value)}

                                />

                                <Form.Input

                                    fluid

                                    label='QTD Entregas Realizadas'
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}

                                />
                                <Form.Input

                                    fluid

                                    label='Valor Por Frete'
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}

                                />






                            </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={16}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={enderecoRua}
                                        onChange={e => setEnderecoRua(e.target.value)}
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4}
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                >

                                </Form.Input>

                            </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={7}
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}>


                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={7}
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}>
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
                                    value={enderecoUf}
                                    onChange={e => setEnderecoUf(e.target.value)}>
                                

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
                                as={Link}
                                to='/list-entregador'
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
