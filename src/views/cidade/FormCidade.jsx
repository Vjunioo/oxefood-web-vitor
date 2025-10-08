import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormCidade() {

    const navigate = useNavigate();

    const [nome, setNome] = useState();
    const [idEstado, setIdEstado] = useState();
    const [qtdPopulacao, setQtdPopulacao] = useState();
    const [ehCapital, setEhCapital] = useState(false);
    const [dataFundacao, setDataFundacao] = useState();
    const [listaEstados, setListaEstados] = useState([]);

    useEffect(() => {
        carregarEstados();
    }, []);

    function carregarEstados() {
        axios.get("http://localhost:8080/api/estado")
            .then((response) => {
                const options = response.data.map(estado => ({
                    key: estado.id,
                    text: estado.nome,
                    value: estado.id,
                }));
                setListaEstados(options);
            })
    }

    function salvar() {
        let cidadeRequest = {
            nome: nome,
            idEstado: idEstado,
            qtdPopulacao: parseInt(qtdPopulacao),
            ehCapital: ehCapital,
            dataFundacao: dataFundacao
        };

        axios.post("http://localhost:8080/api/cidade", cidadeRequest)
            .then(response => {
                console.log("Cidade cadastrada com sucesso.");
                navigate("/list-cidade");
            })
            .catch(error => {
                console.log("Erro ao incluir a cidade.");
            });
    }

    return (
        <div>
            <MenuSistema tela={'cidade'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <h2> <span style={{ color: 'darkgray' }}> Cidade &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)} // <-- CORRIGIDO AQUI
                                />
                                <Form.Select
                                    required
                                    fluid
                                    label='Estado'
                                    options={listaEstados}
                                    placeholder='Selecione'
                                    value={idEstado}
                                    onChange={(e, { value }) => setIdEstado(value)}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='População'
                                    type="number"
                                    value={qtdPopulacao}
                                    onChange={e => setQtdPopulacao(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Data de Fundação'
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        placeholder="dd/mm/aaaa"
                                        value={dataFundacao}
                                        onChange={e => setDataFundacao(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>
                            <Form.Group inline>
                                <label>É a capital?</label>
                                <Form.Radio
                                    label='Sim'
                                    checked={ehCapital === true}
                                    onChange={() => setEhCapital(true)}
                                />
                                <Form.Radio
                                    label='Não'
                                    checked={ehCapital === false}
                                    onChange={() => setEhCapital(false)}
                                />
                            </Form.Group>
                        </Form>
                        <div style={{ marginTop: '4%' }}>
                            <Link to="/list-cidade">
                                <Button type="button" inverted circular icon labelPosition='left' color='orange'>
                                    <Icon name='reply' /> Voltar
                                </Button>
                            </Link>
                            <Button inverted circular icon labelPosition='left' color='blue' floated='right' onClick={salvar}>
                                <Icon name='save' /> Salvar
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}