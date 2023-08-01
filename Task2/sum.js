function sumArrIntegers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array');
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      sum += arr[i];
    } else {
      throw new Error('no integer value');
    }
  }

  return sum;
}
const inputArray = [1, 2, 3, 4, 5];
const sum = sumArrIntegers(inputArray);
console.log(sum); 

