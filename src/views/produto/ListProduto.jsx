import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListProduto() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {
        axios.get("http://localhost:8080/api/produto")
            .then((response) => {
                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true);
        setIdRemover(id);
    }

    async function remover() {
        await axios.delete('http://localhost:8080/api/produto/' + idRemover)
            .then((response) => {
                console.log('Produto removido com sucesso.');
                carregarLista();
            })
            .catch((error) => {
                console.log('Erro ao remover um produto.');
            });
        setOpenModal(false);
    }

    return (
        <div>
            <MenuSistema tela={'produto'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Produto </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-produto'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Título</Table.HeaderCell>
                                    <Table.HeaderCell>Código</Table.HeaderCell>
                                    <Table.HeaderCell>Valor Unitário</Table.HeaderCell>
                                    <Table.HeaderCell>Tempo de Entrega</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {lista.map(produto => (
                                    <Table.Row key={produto.id}>
                                        <Table.Cell>{produto.titulo}</Table.Cell>
                                        <Table.Cell>{produto.codigo}</Table.Cell>
                                        <Table.Cell>R$ {produto.valorUnitario.toFixed(2)}</Table.Cell>
                                        <Table.Cell>{produto.tempoEntregaMinimo} - {produto.tempoEntregaMaximo} min</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste produto'
                                                icon='edit'
                                            /> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este produto'
                                                icon='trash'
                                                onClick={() => confirmaRemover(produto.id)}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
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