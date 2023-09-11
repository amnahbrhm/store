import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 3001

app.use('/', express.static("dist/store"));

app.listen(port, () => {
    console.log(`Amnah ${port}`)
})