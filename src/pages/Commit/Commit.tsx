import React from 'react'
import { getAllCommits } from '../../api/api-github';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import BasicLayout from '../../layout/BasicLayout';
import HookUser from '../../hooks/user';
import { map } from 'lodash';
import { withRouter } from 'react-router';
import { transformDate } from './../../utils/functions';
import { Link } from 'react-router-dom';
import './Commit.scss';

const Commit = (props: any) => {
    const { setRefreshPage, match } = props;
    const [commits, setCommits] = useState([])
    const user = HookUser();

    useEffect(() => {
        getAllCommits(parseInt(match.params.id)).then(result => {
            if (result.status !== 200){
                toast.warning(result.data.message)
            } else {
                setCommits(result.data);
            }
        })
        .catch(error => {
            console.log(error);
        })
        
    }, [])

    return (
        <Container className="home" fluid>
            <BasicLayout className="home" setRefreshPage={setRefreshPage} user={user}>
                <div>   
                    {
                        map(commits, (commit: any, index) => (
                            <Card key={`idCard${index}`} style={{ width: 'auto', backgroundColor: '#38444d', margin: '10px', borderRadius: '20px' }}>
                                <Card.Body>
                                    <Card.Title>{commit.message}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Creado el: {transformDate(commit.author.date)}</Card.Subtitle>
                                    <ListGroup className="listGroup" variant="flush">
                                        <ListGroup.Item className="listItem">Autor: {commit.author.name}</ListGroup.Item>
                                        <ListGroup.Item className="listItem">Correo: {commit.author.email}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </BasicLayout>
        </Container>
    )
}

export default withRouter(Commit);