import { Request, Response, Router } from 'express';

class IndexRouters {
    router: Router;
    constructor() {
    this.router = Router();
    this.routes();
    }

    routes(){
    this.router.get('/', (req, res) => res.send('Hi uwu'))
    }
}

const indexRoutes = new IndexRouters();
indexRoutes.routes();

export default indexRoutes.router;