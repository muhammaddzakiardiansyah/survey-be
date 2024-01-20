import express, { Application, Request, Response } from "express";
import routers from "./routers";
const port = 3000;
const app: Application = express();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use('api/v1', routers);

app.get('/*', (req: Request, res: Response) => {
    return res.send({
        statusCode: 404,
        message: "Result not found:(",
    })
})

app.listen(port, () => {
    console.log(`Server running at port\nhttp://localhost:${port}`);
    
})