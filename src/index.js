
exports.min = function min(array) {
  if (array == undefined || array.length ==0)
    return 0;
  for (let num of array) {
    if (array.find((x) => { return x < num }) !== undefined)
      continue;
    return num
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length ==0)
    return 0;
  for (let num of array) {
    if (array.find((x) => { return x > num }) !== undefined)
      continue;
    return num
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array.length ==0)
    return 0;
  return array.reduce((a,b) => a+b,0)/array.length
}
