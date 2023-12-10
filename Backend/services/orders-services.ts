import { Express } from 'express';
import { OrdersController } from '../controllers/OrdersController'; // Pastikan file dan path sudah sesuai


export class OrderService {
  app: Express;
  ordersController: OrdersController;

  constructor(app: Express) {
    this.app = app;
    this.ordersController = new OrdersController(); // Pastikan controller sudah dibuat dengan benar
  }
  init() {
    this.app.get('/orders', this.ordersController.getAll);
    this.app.get('/orders/:id', this.ordersController.getById);
    this.app.post('/orders', this.ordersController.create);
    this.app.patch('/orders/:id', this.ordersController.patch);
    this.app.delete('/orders/:id', this.ordersController.delete);
  }

  

}
