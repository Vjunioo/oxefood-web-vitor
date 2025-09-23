import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema'; // Importe o MenuSistema

export default function FormProduto() {

    return (

        <div>

            {/* A única alteração é aqui, na propriedade 'tela' */}
            <MenuSistema tela={'produto'} />

            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Form>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder="Informe o título do produto"
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder="Informe o código do produto"
                                />
                            </Form.Group>

                            <Form.TextArea
                                label='Descrição'
                                placeholder='Informe a descrição do produto'
                            />

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    placeholder="R$ 0,00"
                                />
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo'
                                    placeholder="30"
                                />
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo'
                                    placeholder="40"
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
                                Listar
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