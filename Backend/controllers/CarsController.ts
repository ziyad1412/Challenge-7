import { Request, Response } from 'express';
import { CarsModel, Cars } from '../models/cars';
import { ValidationError } from 'objection';

export class CarsController {
  async getAll(req: Request, res: Response) {
    try {
      const { plate } = req.query;
      const qCars = CarsModel.query();

      if (plate) {
        qCars.where('plate', 'like', `%${plate}%`);
      }

      const cars = await qCars;
      res.send(cars);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const car = await CarsModel.query().findById(req.params.id);
      res.send(car);
    } catch (error) {
      res.status(404).send({ message: 'Car not found' });
    }
  }

  async create(req: Request<{}, {}, Cars, {}>, res: Response) {
    try {
      const body = {
        ...req.body,
        specs: JSON.stringify(req.body.specs),
        options: JSON.stringify(req.body.specs),
      };
      const car = await CarsModel.query().insert(body).returning('*');
      res.send(car);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: 'Internal Server Error' });
      }
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const body = {
        ...req.body,
        specs: JSON.stringify(req.body.specs),
        options: JSON.stringify(req.body.options),
      };
      const car = await CarsModel.query().findById(req.params.id).patch(body);
      res.send(car);
    } catch (error) {
      res.status(404).send({ message: 'Car not found' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const car = await CarsModel.query().deleteById(req.params.id);
      res.send(car);
    } catch (error) {
      res.status(404).send({ message: 'Car not found' });
    }
  }
}
