const tail = (array) => {
  if (array.length > 2) {
    array.shift();
    return array;
  }
  return [];
};

module.exports = tail;
