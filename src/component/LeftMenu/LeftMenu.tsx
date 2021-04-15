import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { getUser, setUser } from '../../api/api-github';
import { IGithubUser } from '../../models/githubuser'
import './LeftMenu.scss';


interface IProps{
    setRefreshPage: (bool: boolean) => void;
    user: IGithubUser;
}
const defaultUser: IGithubUser = {
    avatar_url: "",
    created_at: "",
    id: 0,
    login: "",
    repos_url: "",
    url: "",
}
const LeftMenu = (props: IProps) => {
    const { setRefreshPage, user } = props;

    const logout = () => {
        setUser(defaultUser);
        setRefreshPage(true);
    }
    
  return (
    <div className='left-menu'>
        <img className='logo' src={user.avatar_url} alt='userImage'/>
        <Link to='/'> 
            <FontAwesomeIcon icon={faHome} /> Inicio
        </Link>
        <Link to='/projects'> 
            <FontAwesomeIcon icon={faCode} /> Repositorios
        </Link>
        <Link to='' onClick={logout} > 
            <FontAwesomeIcon icon={faUndoAlt} /> Volver a buscar
        </Link>
    </div>
  );
}

export default LeftMenu;