const tail = (array) => {
  if (array.length > 2) {
    array.shift();
    console.log(array);
    return array;
  }
  return [];
};

module.exports = tail;
