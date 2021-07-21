    import findAll, { create, findOne, update, deletes } from '../controllers/post.controller.js'
    import {Router} from 'express'

export default function routes(app){
    const router = new Router()

    router.get('/', findAll)
    router.post('/', create)
    router.get('/:id', findOne)
    router.put('/:id', update)
    router.delete('/:id', deletes)

    app.use('/api/posts', router)
}