import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "task_manager",
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
  logging: false,
});
