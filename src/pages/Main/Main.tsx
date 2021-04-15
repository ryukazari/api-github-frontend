import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import BasicLayout from '../../layout/BasicLayout';
import './Main.scss';
import { IGithubUser } from './../../models/githubuser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { transformDate } from '../../utils/functions'

interface IProps{
    setRefreshPage: (bool: boolean) => void;
    user: IGithubUser;
}

const Main = (props: IProps) => {
  const { setRefreshPage, user } = props;
  return (
    <Container className="home" fluid>
        <BasicLayout className="home" setRefreshPage={setRefreshPage} user={user}>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser} />  Nombre de usuario</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={user.login}
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faCalendar} />  Fecha de creación</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={transformDate(user.created_at)}
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="info"
                size="lg" 
                block
                className="buttonGithub"
                onClick={()=>{window.open(user.url, '_blank')}}
              >
                Ver perfil en github
              </Button>
            </Col>
          </Row>
        </BasicLayout>
    </Container>
  )
  
}


export default Main;