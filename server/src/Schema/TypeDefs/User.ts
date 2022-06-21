import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID }, // this is the id of the user
    name: { type: GraphQLString }, // this is the name of the user
    username: { type: GraphQLString }, // this is the username of the user
    password: { type: GraphQLString }, // this is the password of the user
  }),
});
