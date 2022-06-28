import {names,  comments} from './data.js';
import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';

// function fullPhoto (photo) {
//   for(let c=0; c < photo.message.length < c++){
//     var element = document.createElement('');
//   element.classList.add(className);
//   };
//   const bigPicture = document.querySelector('.big-picture');
//   bigPicture.classList.remove('hidden');
//   bigPicture.querySelector('.big-picture__img').querySelector('img').src = photo.url;
//   bigPicture.querySelector('.likes-count').textContent = photo.likes;
//   bigPicture.querySelector('.comments-count').textContent = photo.message.length;
//   for (let a =0; a< photo.message.length; a++) {
//     const listItem = bigPicture.querySelector('.social__comments').children[a];
//     listItem.querySelector('img').src =`img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
//     listItem.querySelector('img').alt = getRandomArrayElement(names);
//     listItem.querySelector('p').textContent = getRandomArrayElement(comments);
//   }
//   bigPicture.querySelector('.social__comment-count').classList.add('hidden');
//   bigPicture.querySelector('.comments-loader').classList.add('hidden');
// }

function fullPhoto (photo) {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = photo.url;
  const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
  bigPictureSocial.querySelector('.likes-count').textContent = photo.likes;
  bigPictureSocial.querySelector('.social__caption').textContent = photo.description;
  bigPictureSocial.querySelector('.comments-count').textContent = photo.message.length;

  const listItem = document.createElement('li');
  listItem.classList.add('social__comment');
  const avatar = document.createElement('img');
  avatar.src =`img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
  avatar.alt = getRandomArrayElement(names);
  listItem.appendChild(avatar);

  const comment = document.createElement('p');
  comment.textContent = getRandomArrayElement(comments);
  listItem.appendChild(comment);


  const cardList = bigPictureSocial.querySelector('.social__comments');
  cardList.appendChild(listItem);


}


export {fullPhoto};
