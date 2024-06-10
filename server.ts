import express from 'express';
import { data } from './data';
//@ts-ignore
import cors from 'cors';
//@ts-ignore
import jsonGraphqlExpress from 'json-graphql-server/node';

const PORT = 3333;
const app = express();

app.use(cors())

app.use('/api/graphql', jsonGraphqlExpress(data));

app.listen(PORT);
console.log(data)