import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import indexRoutes from './routers/indexRouters';
import mongoose from 'mongoose';

class Server {
    public app: express.Application;
    constructor() {
    this.app = express()
    this.config();
    this.routers();
    }

    config(){
    //MongoDB
    
    //Backend Settings
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    }

    routers() {
    this.app.use(indexRoutes);
    }

    start() {
    this.app.listen(this.app.get('port'), () => console.log('Server On Port: '+this.app.get('port')));
    }
}

const server = new Server();
server.start();


