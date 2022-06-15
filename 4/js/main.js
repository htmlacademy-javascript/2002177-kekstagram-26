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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const id = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const names = ['Victor', 'Anna', 'Petr', 'Vasiliy','Nadezhda','Irina','Vadim','Olga','Maxim','Arina','Alexey'];
const comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const description =['Недостаточно овладеть премудростью, нужно также уметь пользоваться ею', 'Тем, кто хочет учиться, часто вредит авторитет тех, кто учит.', 'Где умирает надежда, там возникает пустота.', 'Подумай, как трудно изменить себя самого, и ты поймешь, сколь ничтожны твои возможности изменить других.', 'Невежество — ночь ума, ночь безлунная и беззвездная.', 'Есть только одно благо — знание, и только одно зло — невежество.'];

const createPosts = ()=>{
  const idNumber = getRandomArrayElement(id);
  id.splice(id.indexOf(idNumber),1);
  const urlNumber = getRandomArrayElement(i);
  i.splice(i.indexOf(urlNumber),1);
  const createOnePost =()=>  ({
    id: idNumber,
    url: 'photos/urlNumber.jpg',
    description: getRandomArrayElement(description),
    likes: getRandomPositiveInteger(15,200),
    message: [getRandomArrayElement(comments), getRandomArrayElement(comments)],
    avatar: 'img/avatar-getRandomPositiveInteger(1,6).svg',
    name: getRandomArrayElement(names),
  });
  createOnePost();
};


const posts = Array.from({length: 25}, createPosts);

