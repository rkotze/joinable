export const joinStrings = function(){
  let stringList = [];

  for (let i = 0; i < arguments.length; i++) {
    const item = arguments[i];
    if(isJoinable(item)){
      stringList.push(item);
    }else{
      const value = joinIf(item);
      if(value){
        stringList.push(value);
      }
    }
  }

  let options = arguments[arguments.length-1];
  if(hasSeparator(options)){
    return stringList.join(options.separator);
  }

  return stringList.join(DEFAULT_SEPARATOR);
};

export const joinIf = function(threeValueArray){
  if(!isArray(threeValueArray))
    return null;

  if(threeValueArray.length >= 2){
    const conditional = threeValueArray[0];
    return [...threeValueArray.slice(1, 3), null][Number(!conditional)];
  }

  return null;
};

let isArray = Array.isArray;
if (!isArray) {
  isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

const isObject = function(arg){
  return Object.prototype.toString.call(arg) === '[object Object]';
};

const hasSeparator = function(options) {
  return isObject(options) && options.hasOwnProperty('separator');
};

const isJoinable = function(item){
  return item && (typeof item === 'string' || typeof item === 'number');
};

const DEFAULT_SEPARATOR = ' ';