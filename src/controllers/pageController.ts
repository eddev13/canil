import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject"
import { Pet } from '../models/pet'

export default {
    home(req: Request, res: Response) {

        let list = Pet.getAll()

        let data = {
            menu: createMenuObject('all'),
            banner: {
                title: "Todos os animais",
                background: "allanimals.jpg"
            },
            list,
        }

        res.render('pages/page', data)
    },
    dogs(req: Request, res: Response) {

        let list = Pet.getFromType('dog')

        let data = {
            menu: createMenuObject('dog'),
            banner: {
                title: "Cachorros",
                background: "banner_dog.jpg"
            },
            list
        }

        res.render('pages/dogs', data)
    },
    cats(req: Request, res: Response) {

        let list = Pet.getFromType('cat')

        let data = {
            menu: createMenuObject('cat'),
            banner: {
                title: "Gatos",
                background: "banner_cat.jpg"
            },
            list
        }

        res.render('pages/cats', data)
    },
    fishes(req: Request, res: Response) {

        let list = Pet.getFromType('fish')

        let data = {
            menu: createMenuObject('fish'),
            banner: {
                title: "Peixes",
                background: "banner_fish.jpg"
            },
            list
        }

        res.render('pages/fishes', data)
    }
}