import React from 'react'

import Button from './button/Button'
import Button2 from './button/Button2'

import UsersList from './users/Users-list'

function App() {
  return (
    <main>

      <h2>Usuarios</h2>
      <UsersList />

      <h2>Botones!</h2>
      <Button />
      <Button2 />

    </main>
  );
}

export default App;
