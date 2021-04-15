import React, { useState } from 'react';
import Home from './pages/Home';

export default function App() {
  const [userSearched, setUserSearched] = useState(null)
  const [refreshPage, setRefreshPage] = useState(false);
  return (
    <div>
      { userSearched ? <h1>Usuario Buscado</h1> : <Home setRefreshPage={setRefreshPage}/>}
    </div>
  );
}