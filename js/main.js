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
checkStringLength ('В целом всё неплохо. Но не всё');

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
const names = ['Victor', 'Anna', 'Petr', 'Vasiliy','Nadezhda','Irina','Vadim','Olga','Maxim','Arina','Alexey'];
const comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const description =['Недостаточно овладеть премудростью, нужно также уметь пользоваться ею', 'Тем, кто хочет учиться, часто вредит авторитет тех, кто учит.', 'Где умирает надежда, там возникает пустота.', 'Подумай, как трудно изменить себя самого, и ты поймешь, сколь ничтожны твои возможности изменить других.', 'Невежество — ночь ума, ночь безлунная и беззвездная.', 'Есть только одно благо — знание, и только одно зло — невежество.'];

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
console.log(posts);
