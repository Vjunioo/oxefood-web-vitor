import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, List, Modal, Segment, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCidade() {

    const [lista, setLista] = useState([]);

    const [openModalDetalhe, setOpenModalDetalhe] = useState(false);
    const [cidadeDetalhe, setCidadeDetalhe] = useState({});

    const [openModalRemover, setOpenModalRemover] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, []);

    function carregarLista() {
        axios.get("http://localhost:8080/api/cidade")
            .then((response) => {
                setLista(response.data)
            });
    }

    function formatarData(dataParam) {
        if (!dataParam) return '';
        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function abrirModalDetalhe(cidadeId) {
        const cidadeSelecionada = lista.find(cidade => cidade.id === cidadeId);
        setCidadeDetalhe(cidadeSelecionada);
        setOpenModalDetalhe(true);
    }

    function confirmaRemover(id) {
        setOpenModalRemover(true);
        setIdRemover(id);
    }

    async function remover() {
        try {
            await axios.delete('http://localhost:8080/api/cidade/' + idRemover);
            console.log('Cidade removida com sucesso.');
            carregarLista(); 
        } catch (error) {
            console.log('Erro ao remover uma cidade.');
        } finally {
            setOpenModalRemover(false);
        }
    }

    return (
        <div>
            <MenuSistema tela={'cidade'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <h2> Cidade </h2>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Nova Cidade'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-cidade'
                        />
                        <br /><br /><br />
                        <Table color='orange' sortable celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Cidade</Table.HeaderCell>
                                    <Table.HeaderCell>UF</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {lista.map(cidade => (
                                    <Table.Row key={cidade.id}>
                                        <Table.Cell>{cidade.nome}</Table.Cell>
                                        <Table.Cell>{cidade.estado.sigla}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button inverted circular color='blue' title='Ver detalhes' icon='eye' onClick={() => abrirModalDetalhe(cidade.id)} />
                                            &nbsp;
                                            <Button inverted circular color='green' title='Editar' icon='edit' as={Link} to="/form-cidade" state={{ id: cidade.id }} />
                                            &nbsp;
                                            <Button inverted circular color='red' title='Remover' icon='trash' onClick={() => confirmaRemover(cidade.id)} />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            {}
            <Modal onClose={() => setOpenModalDetalhe(false)} open={openModalDetalhe}>
                <Header icon='map marker alternate' content='Detalhamento da Cidade' />
                <Modal.Content>
                    <Segment>
                        <List divided relaxed>
                            <List.Item>
                                <List.Content> <List.Header>UF:</List.Header> {cidadeDetalhe.estado?.nome} </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content> <List.Header>Nome:</List.Header> {cidadeDetalhe.nome} </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content> <List.Header>População:</List.Header> {cidadeDetalhe.qtdPopulacao} </List.Content>
                            </List.Item>
                             <List.Item>
                                <List.Content> <List.Header>Capital:</List.Header> {cidadeDetalhe.ehCapital ? 'Sim' : 'Não'} </List.Content>
                            </List.Item>
                             <List.Item>
                                <List.Content> <List.Header>Data de Fundação:</List.Header> {formatarData(cidadeDetalhe.dataFundacao)} </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='grey' onClick={() => setOpenModalDetalhe(false)}>
                        <Icon name='remove' /> Fechar
                    </Button>
                </Modal.Actions>
            </Modal>

            {}
            <Modal basic onClose={() => setOpenModalRemover(false)} open={openModalRemover} size='small'>
                <Header icon>
                    <Icon name='trash' />
                    Tem certeza que deseja remover esse registro?
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModalRemover(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={remover}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}