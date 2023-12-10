import { Express, Request, Response } from "express";
import { UsersModel, Users } from "../models/users"; // Pastikan impor model Users yang sesuai
import { ValidationError } from "objection";

export class UserService {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  init() {
    this.app.get("/users", this.getAll);
    this.app.get("/users/:id", this.getById);
    this.app.post("/users", this.create);
    this.app.patch("/users/:id", this.patch);
    this.app.delete("/users/:id", this.delete);
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await UsersModel.query();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const user = await UsersModel.query()
      .findById(id);
    res.status(200).json(user);
  }

  async create(req: Request<{}, {}, Users, {}>, res: Response) {
    try {
      const body = req.body;
      const user = await UsersModel.query().insert(body).returning("*");
      res.send(user);
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
    const user = await UsersModel.query().findById(req.params.id).patch(body);
    res.send(user);
  }

  async delete(req: Request, res: Response) {
    const user = await UsersModel.query().deleteById(req.params.id);
    res.send(user);
  }
}
