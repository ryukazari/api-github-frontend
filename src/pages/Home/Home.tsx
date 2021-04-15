import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap'
import WhiteLogo from '../../assets/png/original.png';
import Logo from '../../assets/png/octocat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { ISearchUser } from '../../models/searchuser';
import './Home.scss';
import { values, size } from 'lodash';
import { toast } from 'react-toastify';
import { searchUser, setUser, getUser } from '../../api/api-github';
import { IGithubUser } from './../../models/githubuser';

interface IProps{
    setRefreshPage: (bool: boolean) => void;
}

const Home = (props: IProps) => {
    const { setRefreshPage } = props;
  return (
    <Container className="home" fluid>
        <Row>
            <LeftSide/>
            <RightSide setRefreshPage={setRefreshPage}/>
            
        </Row>
    </Container>
  )
  
}

const LeftSide = () => {
    return (
        <Col className="home__left" xs={6}>
            <div>
                <img src={WhiteLogo} alt="Github logo."/>
                <div>
                    <h2>
                        <FontAwesomeIcon icon={faSearch} />
                        Buscador de proyectos de github.
                    </h2>
                    <h2>
                        <FontAwesomeIcon icon={faUsers} />
                        Descubre a todos los usuarios.
                    </h2>
                    <h2>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        Descubre a fondo sus proyectos.
                    </h2>
                </div>
            </div>
        </Col>
      )
}

const RightSide = (props: IProps) => {
    const { setRefreshPage } = props;
    const [searchSpinner, setSearchSpinner] = useState(false);
    const [formData, setFormData] = useState(initialFormValue());

    const onSubmit = (e: any) => {
        e.preventDefault();
        let validCount: number = 0;
        values(formData).some( (value: any) => {
            value && validCount++
            return null
        });
        if (validCount !== size(formData)) {
            //Existen campos incompletos
            toast.warning("Complete todos los campos del formulario");
        } else {
            //Validar los campos
            setSearchSpinner(true);
            searchUser(formData)
            .then(result => {
                if (result.status !== 200){
                    toast.warning(result.data.message)
                } else {
                    setUser(result.data);
                    setRefreshPage(true);
                }
            })
            .catch(error => {
                toast.error('Error en el servidor, inténtelo más tarde.');
            })
            .finally(() => {
                setSearchSpinner(false);
            })
        }
    }
    const onChange = (e: any) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    return (
        <Col className="home__right" xs={6}>
            <div>
                <img src={Logo} alt="Octocat"/>
                <h2>Descubre un mundo lleno de ideas.</h2>
                <h3>Digita el nombre de usuario que deseas buscar.</h3>
                <Form onSubmit={onSubmit} onChange={onChange}>
                    <Form.Group controlId="searchForm">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ejemplo: ryukazari" 
                            name="username"
                            defaultValue={formData.username}
                        />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary"  type="submit"> 
                        { !searchSpinner ? "Buscar" : <Spinner animation="border" /> }
                    </Button>
                </Form>
            </div>
        </Col>
      )
}

function initialFormValue(){
    const formDefault: ISearchUser = {
        username: ""
    }
    return formDefault;
}

export default Home;