import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { getUser } from './api/api-github';
import { IGithubUser } from './models/githubuser';

function initUserSearched(){
  const user: IGithubUser = {
    avatar_url: "",
    created_at: "",
    id: 0,
    login: "",
    repos_url: "",
    url: "",
  }
  return user;
}

export default function App() {
  const [userSearched, setUserSearched] = useState(initUserSearched())
  const [refreshPage, setRefreshPage] = useState(false);
  useEffect(() => {
    setUserSearched(getUser());
    setRefreshPage(false);
  }, [refreshPage])
  return (
    <div>
      { userSearched.id !== 0 ? <h1>Usuario Buscado</h1> : <Home setRefreshPage={setRefreshPage}/>}
    </div>
  );
}