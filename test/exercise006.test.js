const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of any numbers that are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 1])).toBe(8);
    expect(sumMultiples([7, 8, 15, 10])).toBe(25);
    expect(sumMultiples([4, 9, 10, 30, 7, 23])).toBe(49);
  });

  test("if there are no multiple of 3 or 5, returns 0", () => {
    expect(sumMultiples([2, 7, 8, 1, 23])).toBe(0);
  });

  test("it works okay with decimal numbers", () => {
    expect(sumMultiples([5.0, 3, 7, 8, 1])).toBe(8);
  });
});

describe("isValidDNA", () => {
  test("returns true if there are the characters 'C', 'G', 'T', 'A'", () => {
    expect(isValidDNA("TATGGGTCTTCG")).toBe(true);
    expect(isValidDNA("GGACACCTC")).toBe(true);
  });

  test("if there the string is empty, returns false", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("if there is only one of the characters, return false", () => {
    expect(isValidDNA("C")).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns a matrix of 1 * 1 when passed 1", () => {
    expect(createMatrix(1,"foo")).toEqual([ ["foo"] ]) 
  });
});

describe("areWeCovered", () => {
  test("returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });

  test("returns false if there are staff but < 3 not scheduled to work", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Tom", rota: ["Wednesday", "Thursday", "Saturday"] },
    ];
    expect(areWeCovered(staff, "Saturday")).toBe(false);
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });

  test("returns true if there are 3 staff members scheduled to work", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Wednesday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Tom", rota: ["Tuesday", "Wednesday", "Saturday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
  });

  test("returns true if there are > 3 staff member scheduled to work", () => {
    const staff = [
      { name: "Sally", rota: ["Saturday", "Tuesday", "Wednesday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Tom", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Gary", rota: ["Tuesday", "Wednesday", "Saturday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
  });
});