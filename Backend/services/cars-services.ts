import { Express } from 'express';
import { CarsController } from '../controllers/CarsController';

export class CarsService {
  app: Express;
  carsController: CarsController;

  constructor(app: Express) {
    this.app = app;
    this.carsController = new CarsController();
  }

  init() {
    this.app.get('/cars', this.carsController.getAll);
    this.app.post('/cars', this.carsController.create);
    this.app.get('/cars/:id', this.carsController.getById);
    this.app.patch('/cars/:id', this.carsController.patch);
    this.app.delete('/cars/:id', this.carsController.delete);
  }
}
