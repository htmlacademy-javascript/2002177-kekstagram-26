function getRandom (min,max){
  if (min<0||max<0 || min>max) {
    return null;
  }
  if (min===max){
    return min;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1)+min);
}
getRandom (3.5,3,7);

function getLength (text, max){
  if (text.length<=max){return true;}
  return false;
}
getLength ('длина комментария не может составлять больше 140 символов',140);
