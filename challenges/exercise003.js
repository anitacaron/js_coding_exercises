function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
 
  const squares = nums.map(number => {
    return Math.pow(number,2);
  });

  return squares;

}

function camelCaseWords(words) {
  let camelCase = words[0];
  if (words === undefined) throw new Error("words is required");

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    camelCase += word.substring(0,1).toUpperCase() + word.substring(1, word.length);
  }
  return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let countSubjects = 0;

  people.forEach(person => {
    countSubjects += person.subjects.length;
  });

  return countSubjects; 
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (let i = 0; i < menu.length; i++) {
    let listIngredients = menu[i].ingredients;
    if (listIngredients.includes(ingredient))
      return true;
  }

  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let arrDuplicates = arr1.filter(function(item) {
    return arr2.indexOf(item) != -1;
  });

  return [...new Set(arrDuplicates.sort())];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
