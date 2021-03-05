const reduce = (array, reduceCondition, extra) => {
  if (extra === undefined) {
    try {
      return array.reduce(reduceCondition);
    } catch (error) {
      return undefined;
    }
  } else return array.reduce(reduceCondition, extra);
};

module.exports = reduce;
