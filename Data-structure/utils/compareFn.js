const COMPARE_RESULT = {
  BIGGER: 1,
  LITTLER: -1,
  EQUAL: 0
};

const defaultCompare = function(a, b) {
  const res = a - b;
  
  if (res > 0) return COMPARE_RESULT.BIGGER;
  if (res < 0) return COMPARE_RESULT.LITTLER;
  if (res === 0) return COMPARE_RESULT.EQUAL;
}

module.exports = {
  defaultCompare,
  COMPARE_RESULT
}