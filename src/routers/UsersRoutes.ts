import { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import RegisterUserDB from '../models/Registers';
import axios from 'axios';

class UsersRoutes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getAllRes(req: Request, res: Response) {
        const Users = await RegisterUserDB.find();
        return res.json(Users);
    }

    public async getRes(req: Request, res: Response) {
        const resuser = await RegisterUserDB.findOne({ username: req.params.username })
        console.log(resuser)
        res.json(resuser);
    }

    public async createRes(req: Request, res: Response) {
        const { username, balance, offers, reffered, inviter } = req.body;
        const newReg = new RegisterUserDB({ username, balance, offers, reffered, inviter });
        await newReg.save();
        return res.json({ newReg });
    }

    public async updateRes(req: Request, res: Response) {
        const { username } = req.params;
        const updateuser = await RegisterUserDB.findOneAndUpdate({ username }, req.body, { new: true })
        return res.json(updateuser)
    }

    public async deleteRes(req: Request, res: Response) {
        const { username } = req.params;
        const deleteuser = await RegisterUserDB.findOneAndDelete({ username })
        return res.json(deleteuser)
    }

    routes() {
        this.router.get('/', this.getAllRes);
        this.router.get('/:username', this.getRes);
        this.router.post('/', this.createRes);
        this.router.put('/:username', this.updateRes);
        this.router.delete('/:username', this.deleteRes);
    }

}

const usersRoutes = new UsersRoutes()

export default usersRoutes.router;