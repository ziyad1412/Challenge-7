import { Request, Response } from 'express';
import { OrdersModel, Orders } from '../models/orders';
import { ValidationError } from 'objection';

export class OrdersController {
  async getAll(req: Request, res: Response) {
    try {
      const orders = await OrdersModel.query();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const order = await OrdersModel.query()
      .findById(id)
      .withGraphFetched("cars");
    res.status(200).json(order);
  }

  async create(req: Request<{}, {}, Orders, {}>, res: Response) {
    try {
      const body = req.body
      const order = await OrdersModel.query().insert(body).returning("*");
      res.send(order);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.send({
          message: error.message,
        });
      }
    }
  }

  async patch(req: Request, res: Response) {
    const body = req.body;
    const order = await OrdersModel.query().findById(req.params.id).patch(body);
    res.send(order);
  }

  async delete(req: Request, res: Response) {
    const order = await OrdersModel.query().deleteById(req.params.id);
    res.send(order);
  }
}
