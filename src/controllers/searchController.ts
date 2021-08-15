import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";


export default {
    search(req: Request, res: Response) {

        let query: string = req.query.q as string

        let list = Pet.getFromName(query)

        let data = {
            menu: createMenuObject(''),
            list,
            query
        }

        if (!query) {
            res.redirect('/')
            return
        }
        
        res.render('pages/search', data)
    }
}