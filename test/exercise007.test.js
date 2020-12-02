const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(78)).toBe(15);
    expect(sumDigits(49103723)).toBe(29);
  });

  test("returns null if it's not a integer", () => {
  	expect(sumDigits("123")).toBe(null);
  	expect(sumDigits(12.70)).toBe(null);
  });
});

describe("createRange", () => {
	test("returns an array with numbers from start and end with step", () => {
		expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);

	});
});

describe("getScreentimeAlertList", () => {
	test("return user that has screen time > 100", () => {
		const users = [
		   {
		     username: "beth_1234",
		     name: "Beth Smith",
		     screenTime: [
		                  { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
		                  { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
		                  { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
		                  { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
		                 ]
		    },
		    {
		     username: "sam_j_1989",
		     name: "Sam Jones",
		     screenTime: [
		                  { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
		                  { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
		                  { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
		                 ]
		    },
		]
		expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
	});
});

describe("hexToRGB", () => {
	test("returns converted hexadecimal in RGB decimals" , () => {
		expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
	});
});

describe("findWinner", () => {
	test("returns the winner of a TicTacToe game", () => {
		const board = [
		    ["X", "0", null],
		    ["X", null, "0"],
		    ["X", null, "0"]
		 ]
		expect(findWinner(board)).toBe("X");
	});
});