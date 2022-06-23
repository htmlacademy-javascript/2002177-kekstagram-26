import {createArray, deleteArrayElement, getRandomArrayElement, getRandomPositiveInteger} from './util';

const names = ['Victor', 'Anna', 'Petr', 'Vasiliy','Nadezhda','Irina','Vadim','Olga','Maxim','Arina','Alexey'];
const comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const description =['Недостаточно овладеть премудростью, нужно также уметь пользоваться ею', 'Тем, кто хочет учиться, часто вредит авторитет тех, кто учит.', 'Где умирает надежда, там возникает пустота.', 'Подумай, как трудно изменить себя самого, и ты поймешь, сколь ничтожны твои возможности изменить других.', 'Невежество — ночь ума, ночь безлунная и беззвездная.', 'Есть только одно благо — знание, и только одно зло — невежество.'];
const ID_COUNT = 25;
const I_COUNT = 25;

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

export {createPosts};
