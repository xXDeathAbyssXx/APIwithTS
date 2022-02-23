import express from 'express';

class Server {
    public app: express.Application;
    constructor() {
    this.app = express()
    this.config();
    }

    config(){
    this.app.set('port', process.env.PORT || 3000);
    }

    routers() {
    this.app.listen(this.app.get('port'), () => console.log('Server On'));
    }

    start() {

    }
}

const server = new Server();
server.start();