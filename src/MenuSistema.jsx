import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

const MenuSistema = (props) => {

    return (
        <>
            <Menu inverted>

                <Menu.Item
                    name='home'
                    active={props.tela === 'home'}
                    as={Link}
                    to='/'
                >
                    <Icon name='home' />
                    Home
                </Menu.Item>

                <Menu.Item
                    name='cliente'
                    active={props.tela === 'cliente'}
                    as={Link}
                    to='/list-cliente'
                >
                    <Icon name='users' />
                    Clientes
                </Menu.Item>

                <Menu.Item
                    name='produto'
                    active={props.tela === 'produto'}
                    as={Link}
                    to='/list-produto'
                >
                    <Icon name='gift' />
                    Produtos
                </Menu.Item>

                <Menu.Item
                    name='entregador'
                    active={props.tela === 'entregador'}
                    as={Link}
                    to='/list-entregador'
                >
                    <Icon name='shipping fast' />
                    Entregadores
                </Menu.Item>

                <Menu.Item
                    name='cidade'
                    active={props.tela === 'cidade'}
                    as={Link}
                    to='/list-cidade'
                >
                    <Icon name='map' />
                    Cidades
                </Menu.Item>

            </Menu>
        </>
    )
}

export default MenuSistema;