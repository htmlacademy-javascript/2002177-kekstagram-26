function createPhoto (array) {
  const element = document.querySelector('#picture').content.querySelector('.picture');
  const usersPhoto = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  array.forEach(({url, likes, message})   => {
    const photo = element.cloneNode(true);
    photo.querySelector('.img').src = url;
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = message.length;
    fragment.append(photo);
  });
  usersPhoto.append(fragment);
}
export {createPhoto};
