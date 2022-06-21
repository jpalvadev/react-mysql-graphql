import { GET_ALL_USERS } from '../Graphql/Queries';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '../Graphql/Mutation';

function ListOfUsers() {
  const { loading, data } = useQuery(GET_ALL_USERS);
  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data.getAllUsers.map((user: any) => (
          <div className="user" key={user.id}>
            <p>
              {user.name} - {user.username}
            </p>
            <button
              onClick={() => {
                deleteUser({ variables: { id: user.id } });
              }}
            >
              Delete User
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ListOfUsers;
