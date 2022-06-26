const usersPhoto = document.querySelector('.picture');
const element = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

function createPhoto (description) {
  description.forEach((url, likes, message)   => {
    const photo = element.cloneNode(true);
    photo.querySelector('img').src = url;
    photo.querySelector('p').querySelector('.likes').textContent = likes;
    photo.querySelector('p').querySelector('.picture__comments').textContent = message.length;
    fragment.append(photo);

  });
  usersPhoto.append(fragment);
}
export {createPhoto};
