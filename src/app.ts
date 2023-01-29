import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import bmi from './bmi';


const app = express();

// TODO implement me :)
app.use(bodyParser.json());
app.use(express.json());
const bmiCalc = bmi();

//app.use(bodyParser.urlencoded({extended : true}));
app.get("/bmi", (req: Request, res: Response) => {
    res.send(bmiCalc);
})

app.get("/heigh", (req: Request, res: Response) => {
    const heigh = req.body;
    res.send(heigh);
})
app.get("/weigh", (req: Request, res: Response) => {
    const weigh = req.body;
    res.send(weigh);
})
app.post("/bmi", (req: Request, res: Response) => {
    const bmi = req.body;
    res.send();
})
export default app;
