import { useState } from 'react';
import { UPDATE_PASSWORD } from '../Graphql/Mutation';
import { useMutation } from '@apollo/client';

function UpdatePassword() {
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="Old Password..."
        onChange={(e) => setOldPassword(e.target.value)}
        value={oldPassword}
      />
      <input
        type="password"
        placeholder="New Password..."
        onChange={(e) => setNewPassword(e.target.value)}
        value={newPassword}
      />

      <button
        onClick={() =>
          updatePassword({
            variables: {
              username: username,
              oldPassword: oldPassword,
              newPassword: newPassword,
            },
          })
        }
      >
        Update Password
      </button>
    </div>
  );
}

export default UpdatePassword;
