/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let sum_numbers = 0;

  arr.forEach(number => {
    if (number % 3 === 0 || number % 5 === 0) {
      sum_numbers += number
    }
  });
  

  return sum_numbers;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  const dna_list = str.split("");
  const dna = ['C', 'G', 'T', 'A'];
  return dna.every(i => dna_list.includes(i));
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let complDNA = "";
  if (isValidDNA(str)) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "T")
        complDNA += "A";
      if (str[i] === "A")
        complDNA += "T";
      if (str[i] === "C")
        complDNA += "G";
      if (str[i] === "G")
        complDNA += "C";
    }
    return complDNA;
  }
  else 
    return "";
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n === 0) return false;
  if (n === 1) return true;

  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false;
  return true;  
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (n <= 0) return null;

  return Array(n).fill(null).map(() => Array(n).fill(fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) return false;

  let count_staff = 0;
  staff.forEach(member => {
    if (member.rota.includes(day)) count_staff++;
  });

  if (count_staff >= 3)
    return true;
  else
    return false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
