import {description, comments, names} from './data';

const ID_COUNT = 25;
const I_COUNT = 25;
const POST_COUNT = 25;

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

const id = createArray(ID_COUNT);
const i = createArray(I_COUNT);

const createPosts = ()=>({
  id: deleteArrayElement (id),
  url: `photos/${deleteArrayElement(i)}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomPositiveInteger(15,200),
  message: Array.from({length: 2}, () => getRandomArrayElement(comments)),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  name: getRandomArrayElement(names),
});

const posts = Array.from({length: POST_COUNT}, createPosts);


export {getRandomPositiveInteger, checkStringLength, createArray, getRandomArrayElement, deleteArrayElement, createPosts, posts};
