export default function diffuse (size, key, message){
    if(key > 0){
      return diffuseHelper(size, key, message)
    }
    else{
      message = message.reverse();
      key = key * -1
      return diffuseHelper(size, key, message).reverse();

    }
}

function diffuseHelper(size, key, message){
  let result = [];
  for(let i = 0; i < key; i++){
    message.push(message[i]);
  }

  for(var i = 0; i < size; i++){
    var test = [...message];
    let arr = test.slice(i+1, key+i+1)
    result[i] = arr.reduce((acc, curr) => acc+curr);
  }

  return result;
}