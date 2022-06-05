function getRandom (min,max){
  if (min<0||max<0 || min>max || Math.floor(min)===Math.floor(max)) {
    return null;
  }
  if (min===max){
    return min;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1)+min);
}
getRandom (0.5,1.2);

function length (text, max){
  if (text.length<=max){return true;}
  return false;
}
length ('длина комментария не может составлять больше 140 символов',140);
