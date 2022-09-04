import express, { NextFunction, Request, Response } from 'express'

const app = express()

const PORT = 8282

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar'})
})

app.listen(PORT, () => {
    console.log('servidor rodando')
})