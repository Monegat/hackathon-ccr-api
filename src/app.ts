import express, {Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cors());

    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.log(err);
    })
  }
}

export default new App().app;