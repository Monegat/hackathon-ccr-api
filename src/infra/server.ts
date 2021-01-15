import 'reflect-metadata';

import app from '../app';
import http from 'http';
import { Application } from 'express';

class Server {
  public server: http.Server;
  private _app: Application;
  private _port: string | number | undefined;
  private _http: any;

  constructor() {
    this._port = process.env.NODE_ENV == 'production' ? process.env.PORT : 0;
    this._app = app;
    this._http = http;
    this.exec();
  }

  private exec(): void {
    this.server = this._http.createServer(this._app);
    this.server.listen(this._port, () => {
      console.log(`Listening on port ${this._port}`);
    })
  }
}

export default new Server().server;