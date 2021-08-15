import { Request, Response } from "express";

export default {
    home(req: Request, res: Response) {
        let obj = { x: "Olá Mundo!" }
        res.render('pages/home', obj)
    },
    dogs(req: Request, res: Response) {
        res.send('dogs')
    },
    cats(req: Request, res: Response) {
        res.send('cats')
    },
    fishes(req: Request, res: Response) {
        res.send('fishes')
    }
}