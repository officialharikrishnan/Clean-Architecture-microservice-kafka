import express from 'express'
import { configServer, startServer } from "./frameworks/webserver/server";
import { route } from './frameworks/webserver/route/router';
import { DbConnection } from './frameworks/database/mongoose/connection';
import { consumeMessage } from './frameworks/services/kafka/consume';

const app = express()
configServer(app)
startServer(app,5300)
DbConnection()
route(app)
consumeMessage()