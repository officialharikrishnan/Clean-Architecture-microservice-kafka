import express, { Application } from 'express'
import { configServer,startServer } from "./framework/webserver/server";
import route from './framework/webserver/route/routes';
import { DbConnection } from './framework/database/mongoose/connection';
import { consumeMessage } from './framework/services/kafka/consume';
const app:Application = express()

configServer(app)
startServer(app,5400)
DbConnection()
route(app)
consumeMessage()