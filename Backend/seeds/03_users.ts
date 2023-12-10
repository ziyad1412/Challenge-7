import { Knex } from "knex";

const tableName = "users";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    {
      name: "Ziyad",
      email: "ziyad@example.com",
      gender: "Male",
      orders_id: 1, // Sesuaikan dengan ID dari tabel orders jika diperlukan
    },
  ]);
}
