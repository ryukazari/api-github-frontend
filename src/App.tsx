import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { getUser } from './api/api-github';
import { ToastContainer } from 'react-toastify';
import { IGithubUser } from './models/githubuser';
import { ApiContext } from './utils/context';
import Routing from './routes/Routing';

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
    console.log("getUser(): ", getUser());
    setUserSearched(getUser());
    setRefreshPage(false);
  }, [refreshPage])
  return (
    <ApiContext.Provider value={userSearched}>
      <div>
        { userSearched.id !== 0 ? (<Routing setRefreshPage={setRefreshPage} user={userSearched}/>) : <Home setRefreshPage={setRefreshPage}/>}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </ApiContext.Provider>
  );
}