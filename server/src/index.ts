// Here goes the initial steps for the application
// Since we have typescript and we configured it to use the ES6 version of JS, we can use imports

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './Schema';
import { createConnection } from 'typeorm';
import { Users } from './Entities/Users';

const main = async () => {
  await createConnection({
    type: 'mysql', // type of database
    database: 'graphqlcrud', // name of the database
    username: 'root', // username for your database
    password: 'lala', // this is the password for the root user
    logging: true, // enable logging of created connections
    synchronize: true, // if you want to drop the database and create it again, set this to true
    entities: [Users], // this is the array of entities that we want to use in our database
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3001, () => {
    console.log('SERVER running on 3001');
  });
};

main().catch((error) => console.log(error));
