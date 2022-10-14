import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env);
export const database = new DataSource({
        type: "mysql",
        host: process.env.DATABASE_HOST.toString(),
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER.toString(),
        password: process.env.DATABASE_PASS.toString(),
        database: process.env.DATABASE.toString(),
        entities: ["./src/entity/*.ts"],
        migrations: ["./src/migrations/*.ts"],
        logging: false,
        synchronize: true,
})