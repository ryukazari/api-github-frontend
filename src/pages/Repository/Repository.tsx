import React from 'react'
import { getAllRepos, setRepositoriesApi } from '../../api/api-github';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import BasicLayout from '../../layout/BasicLayout';
import HookUser from '../../hooks/user';
import { map } from 'lodash';
import { Route } from 'react-router';
import { transformDate } from './../../utils/functions';
import { Link } from 'react-router-dom';

interface IProps{
    setRefreshPage: (bool: boolean) => void;
}

const Repository = (props: IProps) => {
    const { setRefreshPage } = props;
    const [repositories, setRepositories] = useState([])
    const user = HookUser();

    useEffect(() => {
        getAllRepos().then(response => {
            setRepositories(response);
            setRepositoriesApi(response);
        })
        .catch(error => {
            toast.error('Error en el servidor, inténtelo más tarde.');
        })
    }, [])

    return (
        <Container className="home" fluid>
            <BasicLayout className="home" setRefreshPage={setRefreshPage} user={user}>
                <div>   
                    {
                        // repositories.length >0 ? repositories.length : 'No hay repos'
                        map(repositories, (repo: any, index) => (
                            <Card  key={`idCardRepository${index}`}  style={{ width: 'auto', backgroundColor: '#38444d', margin: '10px', borderRadius: '20px' }}>
                                <Card.Body>
                                    <Card.Title>{repo.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Creado el: {transformDate(repo.created_at)}</Card.Subtitle>
                                    <Card.Text>
                                    {repo.description}
                                    </Card.Text>
                                    <Card.Link target="_blank" href={repo.html_url}>Ver en github</Card.Link>
                                    <Link to={`/commit/${repo.id}`}> Ver commits</Link>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </BasicLayout>
        </Container>
    )
}

export default Repository