import express from 'express';
import path from "path";
import morgan from 'morgan';
import helmet from 'helmet';
import indexRoutes from './routers/indexRouters';
import UserRoutes from './routers/UsersRoutes';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
require("dotenv").config();
  

class Server {
    public app: express.Application;
    constructor() {
    this.app = express()
    this.config();
    this.routers();
    }

    config(){
    //MongoDB
    const user = process.env.USERDB;
    const pass = process.env.PASSWORDDB;
    mongoose.connect(
      `mongodb+srv://`+user+`:`+pass+
      `@cluster0.pmfuk.mongodb.net/Data?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => {
        console.log("\n");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
        console.log("[INFO]: Loading Mondodb....");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
        console.log("[INFO]: Ready MongoDB ✅");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
      }
    );
    //Backend Settings
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(compression());
    this.app.use(cors());
    }

    routers() {
    this.app.use(indexRoutes);
    this.app.use('/api/register', UserRoutes);
    }

    start() {
    this.app.listen(this.app.get('port'), () => console.log('Server On Port: '+this.app.get('port')));
    }
}

const server = new Server();
server.start();


