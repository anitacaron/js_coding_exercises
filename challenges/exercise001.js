function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  //return word.charAt(0).toUpperCase() + word.slice(1);
  return word.substring(0,1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1) + '.' + lastName.substring(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * (1 + (vatRate / 100)) * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return originalPrice - Math.round((originalPrice * reduction/100) * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 == 0) return str.substring(Math.floor(str.length/2)-1,Math.floor(str.length/2) + 1);
  else return str.charAt(Math.floor(str.length/2));
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  words.forEach((word, index) => words[index] = word.split("").reverse().join(""));

  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;

  users.forEach(user => {
    if (user.type == "Linux") count += 1;
  });

  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const sum = scores.reduce((accumulator, currentValue) =>
  {
    return accumulator + currentValue;
  });

  let mean = sum/scores.length;

  if (!Number.isInteger(mean)) return Number.parseFloat(mean.toFixed(2));
  else return mean;

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0 && n % 5 == 0) return 'fizzbuzz';
  if (n % 3 == 0) return 'fizz';
  if (n % 5 == 0) return 'buzz';
  else return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
