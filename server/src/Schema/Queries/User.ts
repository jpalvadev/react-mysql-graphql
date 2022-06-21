// Queries is only used for queries, not mutations. It deals with only the READ portion of a CRUD application.

import { GraphQLList } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { Users } from '../../Entities/Users'; // This is the entity that we are going to use in our database

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find(); // This is the function that will return all the users from the database
  },
};
