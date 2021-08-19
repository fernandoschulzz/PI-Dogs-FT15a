  
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");

const agent = session(app);

describe("Routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => conn.sync({ force: false }));

  describe("GET /dog", () => {
    it("should get 200", () => agent.get("/dog").expect(200));
    it("Expects content type to be JSON", () => {
      agent.get("/dog").expect("Content-Type", /json/);
    });
  });
  describe("POST /dog", () => {
    it("Expects content type to be JSON", () => {
      agent.get("/dog").expect("Content-Type", /json/);
    });
  });
});