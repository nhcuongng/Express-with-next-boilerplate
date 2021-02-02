import 'reflect-metadata';
import 'dotenv-safe/config';
import express, { Request, Response } from 'express';
import next from 'next';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver],
      }),
      context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app: server });

    server.all('*', (req: Request, res: Response) => handle(req, res));
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
