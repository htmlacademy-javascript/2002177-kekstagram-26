
import {createPosts} from './data.js';

function createPhoto () {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const usersPhoto = document.querySelector('.pictures');
  const pictureFragment = document.createDocumentFragment();
  const array = createPosts(25);
  array.forEach(({url,likes,message}) => {
    const photo= pictureTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = message.length;
    pictureFragment.append(pictureFragment);
  });

  usersPhoto.append(pictureFragment);
}

createPhoto();


