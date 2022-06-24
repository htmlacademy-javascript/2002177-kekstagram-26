function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

function createArray (length) {
  const arr = [];
  for (let j=0; j<length; j++){
    arr[j]= j+1;
  }
  return arr;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

function deleteArrayElement (arr){
  const number = getRandomArrayElement(arr);
  arr.splice(arr.indexOf(number),1);
  return number;
}


export {getRandomPositiveInteger, checkStringLength, createArray, getRandomArrayElement, deleteArrayElement};
