function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter(function(item) {
    return item < 1;

  });

  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesFound = names.filter(function(name) {
    return name.startsWith(char);
  });
  return namesFound;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbsFound = words.filter(function(word) {
    return word.startsWith('to ');
  });
  return verbsFound;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const getInt = nums.filter(function(number) {
    return Number.isInteger(number);
  });
  return getInt;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = users.map(function(user) {
    return user.data.city.displayName;
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = nums.map(function(num) {
    return Math.round((Math.sqrt(num)*100))/100;
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentencesFound = sentences.filter(function(sentence) {
    return sentence.toLowerCase().indexOf(str) > -1;
  });
  return sentencesFound;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = triangles.map(function(triangle) {
    return Math.max(...triangle);
  });
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
