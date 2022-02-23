import {Request, Response, Router} from 'express';
import RegisterUserDB from '../models/Registers';

class UsersRoutes{
    router: Router;
    constructor() {
    this.router = Router();
    this.routes();
    }

    getRes(req: Request, res: Response) {
    //HERE AXIOS
    res.send('Testing')
    }

    createRes(){
    
    }
  
    updateRes(){

    }

    deleteRes(){

    }

    routes(){
    this.router.get('/', this.getRes);
    this.router.get('/:username', this.getRes);
    this.router.post('/', this.createRes);
    this.router.put('/:username', this.updateRes);
    this.router.delete('/:username', this.deleteRes);
    }

}

const usersRoutes = new UsersRoutes()

export default usersRoutes.router;