import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftMenu from '../../component/LeftMenu';
import './BasicLayout.scss';
import { IGithubUser } from './../../models/githubuser';

interface IProps{
    children: React.ReactNode;
    className: string;
    setRefreshPage: (bool: boolean) => void;
    user: IGithubUser;
}

const BasicLayout = (props: IProps) => {
    const { user, children, className, setRefreshPage } = props;
  return (
      <Container className={`basic-layout ${className}`}>
          <Row>
              <Col xs={3} className="basic-layout__menu">
                  <LeftMenu user={user} setRefreshPage={setRefreshPage}/>
              </Col>
              <Col xs={9} className="basic-layout__content">
                  {children}
              </Col>
          </Row>
      </Container>
  )
}

export default BasicLayout;