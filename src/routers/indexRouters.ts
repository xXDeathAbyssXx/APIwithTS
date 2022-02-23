import { Request, Response, Router } from 'express';

class IndexRouters {
    router: Router;
    constructor() {
    this.router = Router();
    this.routes();
    }

    routes(){
    this.router.get('/', (req, res) => res.send('Api: /register/users_here'));
    }
}

const indexRoutes = new IndexRouters();
indexRoutes.routes();

export default indexRoutes.router;