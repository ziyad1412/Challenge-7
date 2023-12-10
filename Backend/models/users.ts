import { Model, ModelObject } from "objection";
import { ModelWithValidator } from "./base";
import { OrdersModel } from "./orders";

export class UsersModel extends ModelWithValidator {
  id!: number;
  name!: string;
  email!: string;
  gender!: string;
  orders_id!: number; // Sesuaikan dengan nama kolom yang sesuai

  static get tableName() {
    return "users";
  }

  static relationMappings = {
    orders: {
      relation: Model.BelongsToOneRelation,
      modelClass: OrdersModel,
      join: {
        from: "users.orders_id", // Sesuaikan dengan nama kolom yang sesuai
        to: "orders.id",
      },
    },
  };
}

export type Users = ModelObject<UsersModel>;
