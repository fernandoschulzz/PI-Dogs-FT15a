const { Dog, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Dog model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe("Dog", () => {
      it("should throw an error if no information is provided", (done) => {
        Dog.create({})
          .then(() => done(new Error("Someting went wrong")))
          .catch(() => done());
      });
      it("should throw an error if no name is provided", (done) => {
        Dog.create({
          weigth: "3 - 5",
          heigth: "20 - 30",
          lifespan:  "10 - 12",
          temperaments: "Kind, Active, Loyal",
        })
          .then(() => done(new Error("Name is required")))
          .catch(() => done());
      });
      it("should throw an error if datatypes don't match", (done) => {
        Dog.create({
          name: 3,
          weigth: "Bulldog",
          heigth: "Kind, Active, Loyal",
          lifespan:  2,
          temperaments: 6,
        })
          .then(() => done(new Error("Datatypes are wrong")))
          .catch(() => done());
      });
     
    });
  });
 });