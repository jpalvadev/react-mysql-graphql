import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { GET_ALL_USERS } from './Queries/User';
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from './Mutations/User';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CREATE_USER, // this is the mutation that we will use to create a user
    deleteUser: DELETE_USER, // this is the mutation that we will use to delete a user
    updatePassword: UPDATE_PASSWORD, // this is the mutation that we will use to update a user's password
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
