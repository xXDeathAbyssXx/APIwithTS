import {Request, Response, Router} from 'express';
import mongoose from 'mongoose';
import RegisterUserDB from '../models/Registers';


class UsersRoutes{
    router: Router;
    constructor() {
    this.router = Router();
    this.routes();
    }

    async getAllRes(req: Request, res: Response) {
    //HERE AXIOS
    const Users = await RegisterUserDB.find();
    res.json(Users);
    }

    getRes(req: Request, res: Response) {

    }

    async createRes(req: Request, res: Response) {
    const {username, balance, offers, reffered,inviter} = req.body;
    const newReg = new RegisterUserDB({username, balance, offers, reffered,inviter});
    await newReg.save();
    res.json({newReg});
    
    }
  
    updateRes(){

    }

    deleteRes(){

    }

    routes(){
    this.router.get('/', this.getAllRes);
    this.router.get('/:username', this.getRes);
    this.router.post('/', this.createRes);
    this.router.put('/:username', this.updateRes);
    this.router.delete('/:username', this.deleteRes);
    }

}

const usersRoutes = new UsersRoutes()

export default usersRoutes.router;