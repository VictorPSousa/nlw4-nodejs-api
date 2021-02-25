import request from "supertest";
import { app } from "../app";
import createConnection from '../database';

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "exemplo@email.com",
            name: "nome user"
        });

    expect(response.status).toBe(201);
    });
});