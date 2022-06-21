import { useState } from 'react';
import { CREATE_USER } from '../Graphql/Mutation';
import { useMutation } from '@apollo/client';

function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, { error }] = useMutation(CREATE_USER);

  return (
    <div className="createUser">
      <h1>Create User</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Username (nickname)"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button
        onClick={() =>
          createUser({
            variables: { name: name, username: username, password: password },
          })
        }
      >
        Create User
      </button>
    </div>
  );
}

export default CreateUser;
