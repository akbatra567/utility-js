const map = (array, functionToCall) => {
  var resultArray = [];
  return action(0, array.length - 1, array, resultArray, functionToCall);
};

const action = (index, lastIndex, array, resultArray, functionToCall) => {
  if (index > lastIndex) return resultArray;

  resultArray.push(functionToCall(array[index]));

  return action(index + 1, lastIndex, array, resultArray, functionToCall);
};

const cube = (element) => element * element * element;

const identity = (element) => element;

module.exports = {
  map,
  cube,
  identity,
};
