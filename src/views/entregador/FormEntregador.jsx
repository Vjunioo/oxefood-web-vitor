import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import InputMask from 'comigo-tech-react-input-mask';

// Opções para o campo de seleção de UF
const ufOptions = [
    { key: 'ac', text: 'AC', value: 'AC' },
    { key: 'al', text: 'AL', value: 'AL' },
    { key: 'ap', text: 'AP', value: 'AP' },
    { key: 'am', text: 'AM', value: 'AM' },
    { key: 'ba', text: 'BA', value: 'BA' },
    { key: 'ce', text: 'CE', value: 'CE' },
    { key: 'df', text: 'DF', value: 'DF' },
    { key: 'es', text: 'ES', value: 'ES' },
    { key: 'go', text: 'GO', value: 'GO' },
    { key: 'ma', text: 'MA', value: 'MA' },
    { key: 'mt', text: 'MT', value: 'MT' },
    { key: 'ms', text: 'MS', value: 'MS' },
    { key: 'mg', text: 'MG', value: 'MG' },
    { key: 'pa', text: 'PA', value: 'PA' },
    { key: 'pb', text: 'PB', value: 'PB' },
    { key: 'pr', text: 'PR', value: 'PR' },
    { key: 'pe', text: 'PE', value: 'PE' },
    { key: 'pi', text: 'PI', value: 'PI' },
    { key: 'rj', text: 'RJ', value: 'RJ' },
    { key: 'rn', text: 'RN', value: 'RN' },
    { key: 'rs', text: 'RS', value: 'RS' },
    { key: 'ro', text: 'RO', value: 'RO' },
    { key: 'rr', text: 'RR', value: 'RR' },
    { key: 'sc', text: 'SC', value: 'SC' },
    { key: 'sp', text: 'SP', value: 'SP' },
    { key: 'se', text: 'SE', value: 'SE' },
    { key: 'to', text: 'TO', value: 'TO' },
];

export default function FormEntregador () {

    return (

        <div>
            <div style={{marginTop: '3%'}}>
                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
                    <Divider />

                    <div style={{marginTop: '4%'}}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                >
                                    <InputMask mask="999.999.999-99" /> 
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='RG'
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                >
                                    <InputMask mask="99/99/9999" placeholder="Ex: 20/03/1985" /> 
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                >
                                    <InputMask mask="(99) 99999-9999" />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                >
                                    <InputMask mask="(99) 9999-9999" />
                                </Form.Input>
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
                                    width={12}
                                />
                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4}
                                />
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                />
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                />
                                <Form.Input
                                    fluid
                                    label='CEP'
                                >
                                    <InputMask mask="99999-999" />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={ufOptions}
                                    placeholder='Selecione'
                                    width={4}
                                />
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={12}
                                />
                            </Form.Group>
                            
                            <Form.Group inline>
                                <label>Ativo:</label>
                                <Form.Radio
                                    label='Sim'
                                    name='radioGroupAtivo'
                                    value='sim'
                                />
                                <Form.Radio
                                    label='Não'
                                    name='radioGroupAtivo'
                                    value='nao'
                                />
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