// Mutations deals with the CREATE, UPDATE, and DELETE portions of a CRUD application.

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { Users } from '../../Entities/Users';
import { MessageType } from '../TypeDefs/Messages';

// type User = {
//   id: number;
//   name: string;
//   username: string;
//   password: string;
// };

// this is a mutation that will create a new user in the database
export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({ name, username, password }); // This is the function that will insert a new user into the database
    return args; // this is the return value of the mutation
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOneBy({ username: username }); // This is the function that will find a user in the database

    if (!user) {
      throw new Error('USERNAME DOESNT EXIST');
    }
    const userPassword = user?.password; // This is the password of the user that we are trying to update

    if (oldPassword === userPassword) {
      await Users.update({ username: username }, { password: newPassword });

      return { successful: true, message: 'PASSWORD UPDATED' };
    } else {
      throw new Error('PASSWORDS DO NOT MATCH!'); // This is the error that will be thrown in GraphQL if the password is incorrect
    }
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Users.delete(id); // This is the function that will delete a user from the database
    return { succesful: true, message: 'USER DELETED' };
  },
};
