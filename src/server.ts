import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

class Server {
    public app: express.Application;
    constructor() {
    this.app = express()
    this.config();
    this.routers();
    }

    config(){
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    }

    routers() {
    this.app.get('/', (req, res) => res.send('Hi uwu'))
    }

    start() {
    this.app.listen(this.app.get('port'), () => console.log('Server On Port: '+this.app.get('port')));
    }
}

const server = new Server();
server.start();


