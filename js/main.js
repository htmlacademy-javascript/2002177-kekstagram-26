import './data';
import './post-settings';
import './util';
import './view-post';
import {description, comments, names} from './data';
import {createArray, deleteArrayElement, getRandomArrayElement, getRandomPositiveInteger} from './util';

const ID_COUNT = 25;
const I_COUNT = 25;
const POST_COUNT = 25;

const id = createArray(ID_COUNT);
const i = createArray(I_COUNT);

const createOnePost = ()=>({
  id: deleteArrayElement (id),
  url: `photos/${deleteArrayElement(i)}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomPositiveInteger(15,200),
  message: Array.from({length: 2}, () => getRandomArrayElement(comments)),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  name: getRandomArrayElement(names),
});

function createPosts (count) {
  Array.from({length: count}, createOnePost);
}
createPosts (POST_COUNT);
